

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
	
	

static {
	JSONParser parser = new JSONParser();
	try {
		Object obj = parser.parse(new FileReader("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json"));
		if(obj!=null) {
		  jsonFinal = (JSONObject) obj;
		  news = (JSONArray) jsonFinal.get("news");
	         Iterator<JSONObject> iterator = news.iterator();
	         while(iterator.hasNext()) {
					JSONObject ob=(JSONObject) iterator.next();
					System.out.println(ob.get("title").toString());
					
					
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
		JSONObject json= new JSONObject();
		//System.out.println(title+url+urlToImage+description);
		json.put("title", title);
		json.put("url", url);
		json.put("urlToImage", urlToImage);
		json.put("description", description);
		if(news.size()<=9) {
			Iterator newsIterator=news.iterator();
			boolean flag=false;
			while(newsIterator.hasNext()) {
				JSONObject ob=(JSONObject) newsIterator.next();
				if(ob.get("title").toString().equalsIgnoreCase((String) json.get("title"))) {
					flag=true;
					break;
				}
			}
			if(flag==false) {
				news.add(json);
				jsonFinal.put("news", news);
				
			}

		
		try{
			FileWriter file = new FileWriter("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json");
		file.write(jsonFinal.toJSONString());
		file.flush();
		}
		catch(IOException e) {
			System.out.println(e);
			
		}
		finally {
			response.setContentType("application/json");
			response.getWriter().write(jsonFinal.toString());;
		}
		}
		else {
			
			System.out.println("Maximum Count Reached ");
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
