

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;




/**
 * Servlet implementation class Handler
 */
@WebServlet("/Handler")
public class Handler extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static JSONObject jsonFinal= new JSONObject();
	static JSONArray news= new JSONArray();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Handler() {
        super();
        // TODO Auto-generated constructor stub
    }
	
	JSONObject json= new JSONObject();

static {
	JSONParser parser = new JSONParser();
	try {
		Object obj = parser.parse(new FileReader("test.json"));
		if(obj!=null) {
		  jsonFinal = (JSONObject) obj;
		  news = (JSONArray) jsonFinal.get("matches");
	         Iterator<JSONObject> iterator = news.iterator();
	         while(iterator.hasNext()) {
	        	 System.out.println(iterator.next().get("title")+"\n");
	         }
		}
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (ParseException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		response.setContentType("text/html");
		PrintWriter out= response.getWriter();
		String title=request.getParameter("title");
		String url=request.getParameter("url");
		String urlToImage=request.getParameter("urlToImage");
		String description=request.getParameter("description");
		System.out.println(title+url+urlToImage+description);
		json.put("title", title);
		json.put("url", url);
		json.put("urlToImage", urlToImage);
		json.put("description", description);
		if(news.size()<=10) {
			Iterator newsIterator=news.iterator();

		news.add(json);
		jsonFinal.put("news", news);
		
		try{
			FileWriter file = new FileWriter("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json");
		file.write(jsonFinal.toJSONString());
		file.flush();
		}
		catch(IOException e) {
			System.out.println(e);
			
		}
		}
		
		


	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}