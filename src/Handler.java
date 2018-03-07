
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
	//static variables maintain their values between function calls and exist throughout the program life
	static JSONObject jsonFinal = new JSONObject();
	static JSONArray news = new JSONArray();

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Handler() {
		super();
		// TODO Auto-generated constructor stub
	}
//to initiallise the JSONArraylist when servlet is called fist time after the start of program
	static {
		JSONParser parser = new JSONParser();
		try {

			Object obj = parser
					.parse(new FileReader("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json"));
			if (obj != null) {
				jsonFinal = (JSONObject) obj;
				news = (JSONArray) jsonFinal.get("news");
				Iterator<JSONObject> iterator = news.iterator();
				while (iterator.hasNext()) {
					JSONObject ob = (JSONObject) iterator.next();


				}

			}
		} catch (FileNotFoundException e) {

			e.printStackTrace();
		} catch (IOException e) {

			e.printStackTrace();
		} catch (ParseException e) {
	
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String res = "Maximum Count Reached";
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String title = request.getParameter("title");
		String url = request.getParameter("url");
		String urlToImage = request.getParameter("urlToImage");
		String description = request.getParameter("description");
		String flag1 = request.getParameter("flag");

		JSONObject json = new JSONObject();
		System.out.println(flag1);
		json.put("title", title);
		json.put("url", url);
		json.put("urlToImage", urlToImage);
		json.put("description", description);
		if (news.size() <= 9 || !Boolean.valueOf(flag1)) {
			Iterator newsIterator = news.iterator();
			boolean flag = false;
			while (newsIterator.hasNext()) {
				JSONObject ob = (JSONObject) newsIterator.next();
				//if title of the entry object exists and is equal to the stored favourite list object title
				if (ob.get("title").toString().equalsIgnoreCase((String) json.get("title"))) {
					if (Boolean.valueOf(flag1)) {

						res = "Already exists in Favourites";
					} else if (!Boolean.valueOf(flag1)) {
						news.remove(ob);
						res = "Removed From Favourites";
					}
					flag = true;
					break;
				}
			}
			if (flag == false) {
				news.add(json);
				jsonFinal.put("news", news);
				res = "Added to Favourites";

			}

			try {

				FileWriter file = new FileWriter("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json");
				file.write(jsonFinal.toJSONString());
				file.flush();
			} catch (IOException e) {
				System.out.println(e);

			} finally {
				response.setContentType("application/json");
				response.getWriter().write(res);
			}
		} else {

			System.out.println("Maximum Count Reached ");
			response.setContentType("application/json");
			response.getWriter().write(res);
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
