
import java.io.FileReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class FavsResponse
 */
@WebServlet("/FavsResponse")
public class FavsResponse extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FavsResponse() {
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	//for sending the json data saved in favourites to mainScript.js
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JSONParser parser = new JSONParser();
		JSONObject jsonFinal = null;
		JSONArray news = null;
		boolean flag = false;
		try {
			//fetching json data from news.json
			Object obj = parser
					.parse(new FileReader("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json"));
			jsonFinal = (JSONObject) obj;
			//initialising  news JSONArray
			news = (JSONArray) jsonFinal.get("news");
			flag = true;

		} catch (IOException e) {
			System.out.println(e);

		} catch (ParseException e) {

			 e.printStackTrace();
		} finally {
			if (flag) {
				if (news.size() == 0) {
					response.setContentType("application/json");
					response.getWriter().write("Nothing in the List");
				} else {
					response.setContentType("application/json");
					response.getWriter().write(jsonFinal.toString());
				}
			} else if (!flag) {
				response.setContentType("application/json");
				response.getWriter().write("Nothing in the List");

			}
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
