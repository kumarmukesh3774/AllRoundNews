/**
 * 
 */

function searchHandler() {
	// alert("bdhcbjkdsm");
	var searchInput = document.getElementById("searchInput").value;
	// alert(searchInput);

	var xmlhttp = new XMLHttpRequest();
	var url = "https://newsapi.org/v2/everything?q=" + searchInput
			+ "&apiKey=0829585b678c492ea688ce9899e48313";
	// opening connection to url
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var s = "";
			flag = true;
			for (i = 0; i < json.articles.length; i++) {
				s = s
						+ "<div class='col-lg-4 col-sm-6'>"
						+

						"<div><b>"
						+ json.articles[i].title
						+ "</b></div>"
						+ "<div class='row'>"
						+ "<div class='col-sm-6'>"
						+ "<a href="
						+ json.articles[i].url
						+ ">"
						+ "<img src="
						+ json.articles[i].urlToImage
						+ " alt='No Image'></div>"
						+ "<div class='col-sm-6'>"
						+ json.articles[i].description
						+ "</div>"
						+ "</a>"
						+ "</div>"
						+

						"<input class='add' type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" "
						+ "flag=\"" + flag + "\"" + "title=\""
						+ json.articles[i].title + "\" " + "url=\""
						+ json.articles[i].url + "\" " + "urlToImage=\""
						+ json.articles[i].urlToImage + "\"" + "description=\""
						+ json.articles[i].description + "\"></div>";
			}

			// document.getElementById("searchResult").insertAdjacentHTML('afterbegin',s);
			document.getElementById("msg").innerHTML = s;

		}

	};

}

function business() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://newsapi.org/v2/everything?sources=business-insider&apiKey=0829585b678c492ea688ce9899e48313";
	// opening connection to url
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var s = "";
			flag = true;
			for (i = 0; i < json.articles.length; i++) {
				s = s
						+ "<div class='col-lg-4 col-sm-6'>"
						+

						"<div><b>"
						+ json.articles[i].title
						+ "</b></div>"
						+ "<div class='row'>"
						+ "<div class='col-sm-6'>"
						+ "<a href="
						+ json.articles[i].url
						+ ">"
						+ "<img src="
						+ json.articles[i].urlToImage
						+ " alt='No Image'></div>"
						+ "<div class='col-sm-6'>"
						+ json.articles[i].description
						+ "</div>"
						+ "</a>"
						+ "</div>"
						+

						"<input class='add' type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" "
						+ "flag=\"" + flag + "\" " + "title=\""
						+ json.articles[i].title + "\" " + "url=\""
						+ json.articles[i].url + "\" " + "urlToImage=\""
						+ json.articles[i].urlToImage + "\"" + "description=\""
						+ json.articles[i].description + "\"></div>";
			}

			// document.getElementById("tech").insertAdjacentHTML('afterbegin',s);
			document.getElementById("msg").innerHTML = s;

		}

	};

}

function tech() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=0829585b678c492ea688ce9899e48313";
	// opening connection to url
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var s = "";
			flag = true;
			for (i = 0; i < json.articles.length; i++) {
				s = s
						+ "<div class='col-lg-4 col-sm-6'>"
						+

						"<div><b>"
						+ json.articles[i].title
						+ "</b></div>"
						+ "<div class='row'>"
						+ "<div class='col-sm-6'>"
						+ "<a href="
						+ json.articles[i].url
						+ ">"
						+ "<img src="
						+ json.articles[i].urlToImage
						+ " alt='No Image'></div>"
						+ "<div class='col-sm-6'>"
						+ json.articles[i].description
						+ "</div>"
						+ "</a>"
						+ "</div>"
						+

						"<input class='add' type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" "
						+ "flag=\"" + flag + "\"" + "title=\""
						+ json.articles[i].title + "\" " + "url=\""
						+ json.articles[i].url + "\" " + "urlToImage=\""
						+ json.articles[i].urlToImage + "\"" + "description=\""
						+ json.articles[i].description + "\"></div>";
			}

			// document.getElementById("tech").insertAdjacentHTML('afterbegin',s);
			document.getElementById("msg").innerHTML = s;

		}

	};

}

function sports() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=0829585b678c492ea688ce9899e48313";
	// opening connection to url
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var s = "";
			flag = true;
			for (i = 0; i < json.articles.length; i++) {
				s = s
						+ "<div class='col-lg-4 col-sm-6'>"
						+

						"<div><b>"
						+ json.articles[i].title
						+ "</b></div>"
						+ "<div class='row'>"
						+ "<div class='col-sm-6'>"
						+ "<a href="
						+ json.articles[i].url
						+ ">"
						+ "<img src="
						+ json.articles[i].urlToImage
						+ " alt='No Image'></div>"
						+ "<div class='col-sm-6'>"
						+ json.articles[i].description
						+ "</div>"
						+ "</a>"
						+ "</div>"
						+

						"<input class='add' type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" "
						+ "flag=\"" + flag + "\"" + "title=\""
						+ json.articles[i].title + "\" " + "url=\""
						+ json.articles[i].url + "\" " + "urlToImage=\""
						+ json.articles[i].urlToImage + "\"" + "description=\""
						+ json.articles[i].description + "\"></div>";
				;
			}

			// document.getElementById("sports").insertAdjacentHTML('afterbegin',s);
			document.getElementById("msg").innerHTML = s;

		}

	};

}

function favourites() {

	// x.style.display = "block";
	// document.getElementById("favs").style.display="block";
	// document.getElementById("favs").insertAdjacentHTML("afterbegin",res);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		var res = "Nothing added to Favourite List";
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// document.getElementById("myDiv").innerHTML =
			// xmlhttp.responseText;
			if (xmlhttp.responseText === "Nothing in the List") {
				var resp = "<div class='col-sm-12'>"
						+ "<h1>Nothing in the List</h1>" + "</b></div>";
				// document.getElementById("favs").insertAdjacentHTML("afterbegin",resp);
				document.getElementById("msg").innerHTML = resp;
				// alert("Nothing in the List");
			} else {
				var finalObj = JSON.parse(this.responseText);
				// alert(finalObj);
				var flag = false;
				var res = "";
				for (i = 0; i < finalObj.news.length; i++) {
					res = res
							+ "<div class='col-lg-4 col-sm-6'>"
							+

							"<div><b>"
							+ finalObj.news[i].title
							+ "</b></div>"
							+ "<div class='row'>"
							+ "<div class='col-sm-6'>"
							+ "<a href="
							+ finalObj.news[i].url
							+ ">"
							+ "<img src="
							+ finalObj.news[i].urlToImage
							+ " alt='No Image'></div>"
							+ "<div class='col-sm-6'>"
							+ finalObj.news[i].description
							+ "</div>"
							+ "</a>"
							+ "</div>"
							+ "<input class='add' type='submit' value='Remove' onclick=\"addToFavourites(this)\" onclick=\"favourites()\" "
							+ "flag=\"" + flag + "\"" + "title=\""
							+ finalObj.news[i].title + "\" " + "url=\""
							+ finalObj.news[i].url + "\" " + "urlToImage=\""
							+ finalObj.news[i].urlToImage + "\""
							+ "description=\"" + finalObj.news[i].description
							+ "\"></div>";

				}
				// document.getElementById("favs").insertAdjacentHTML("afterbegin",res);
				document.getElementById("msg").innerHTML = res;

				// document.getElementById("favs").style.display="none";

			}
		}
	};

	// var url1 ="http://localhost:8081/AllRoundNews/FavsResponse";
	var url1 = "http://localhost:8088/AllRoundNews/FavsResponse";
	// var url1
	// ="http://localhost:8088/AllRoundNews/Handler?title="+title+"&url="+url+"&urlToImage="+urlToImage+"&description="+description;
	xmlhttp.open('GET', url1, true);
	xmlhttp.send();

}

function addToFavourites(input) {
	var title = input.getAttribute('title');
	var url = input.getAttribute('url');
	var urlToImage = input.getAttribute('urlToImage');
	var description = input.getAttribute('description');
	var flag = input.getAttribute('flag');

	// alert(title+url+urlToImage+description+flag);

	// alert(flag);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// document.getElementById("myDiv").innerHTML =
			// xmlhttp.responseText;
			// var finalObj=JSON.parse(this.responseText);
			finalObj = xmlhttp.responseText;
			alert(finalObj);
			if (finalObj === "Removed From Favourites") {
				favourites();
			}
			/*
			 * var res=""; for(i=0;i<finalObj.news.length;i++){ res=res+"<div
			 * class='col-lg-4 col-sm-6'>" +
			 *  "<div><b>"+finalObj.news[i].title+"</b></div>"+ "<div
			 * class='row'>"+ "<div class='col-sm-6'>"+ "<a
			 * href="+finalObj.news[i].url+">"+ "<img
			 * src="+finalObj.news[i].urlToImage+" alt='No Image'></div>"+ "<div
			 * class='col-sm-6'>"+finalObj.news[i].description+"</div>"+ "</a>" + "</div>" + "</div>"; }
			 * document.getElementById("favs").insertAdjacentHTML("afterbegin",res);
			 * //document.getElementById("favs").style.display="none";
			 */

		}
	};

	var url1 = "http://localhost:8088/AllRoundNews/Handler?title=" + title
			+ "&url=" + url + "&urlToImage=" + urlToImage + "&description="
			+ description + "&flag=" + flag;

	// var url1
	// ="http://localhost:8088/AllRoundNews/Handler?title="+title+"&url="+url+"&urlToImage="+urlToImage+"&description="+description;
	xmlhttp.open('GET', url1, true);
	xmlhttp.send();

}

function receiver() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0829585b678c492ea688ce9899e48313";
	// opening connection to url
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var s = "";
			var flag = true;
			for (i = 0; i < json.articles.length; i++) {

				s = s
						+ "<div class='col-lg-4 col-sm-6'>"
						+

						"<div><b>"
						+ json.articles[i].title
						+ "</b></div>"
						+ "<div class='row'>"
						+ "<div class='col-sm-6'>"
						+ "<a href="
						+ json.articles[i].url
						+ ">"
						+ "<img src="
						+ json.articles[i].urlToImage
						+ " alt='No Image'></div>"
						+ "<div class='col-sm-6'>"
						+ json.articles[i].description
						+ "</div>"
						+ "</a>"
						+ "</div>"
						+

						"<input class='add' type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" "
						+ "flag=\"" + flag + "\"" + "title=\""
						+ json.articles[i].title + "\" " + "url=\""
						+ json.articles[i].url + "\" " + "urlToImage=\""
						+ json.articles[i].urlToImage + "\"" + "description=\""
						+ json.articles[i].description + "\"></div>";
			}

			//document.getElementById("msg").insertAdjacentHTML('afterbegin',s);
			document.getElementById("msg").innerHTML = s;

		}

	};

}
