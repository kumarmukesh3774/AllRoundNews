
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
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JSONParser parser = new JSONParser();
		JSONObject jsonFinal = null;
		JSONArray news = null;
		boolean flag = false;
		try {

			// Object obj = parser.parse(new
			// FileReader("/home/mukesh/Dev/STSWorks/AllRoundNews/json/news.json"));
			Object obj = parser
					.parse(new FileReader("/home/sapient/Desktop/Mukesh/SDev/STS/AllRoundNews/json/news.json"));
			// if(obj!=null ) {
			jsonFinal = (JSONObject) obj;
			news = (JSONArray) jsonFinal.get("news");
			flag = true;
			// }

		} catch (IOException e) {
			System.out.println(e);

		} catch (ParseException e) {

			// e.printStackTrace();
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
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
