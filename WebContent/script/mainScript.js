/**
 * 
 */
function addToFavourites(input){
	var title= input.getAttribute('title');
	var url= input.getAttribute('url');
	var urlToImage= input.getAttribute('urlToImage');
	var description= input.getAttribute('description');
	console.log(title+url+urlToImage+description);
	
	var xmlhttp=new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			//document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	};
	
	var url1 ="http://localhost:8088/AllRoundNews/Handler?title="+title+"&url="+url+"&urlToImage="+urlToImage+"&description="+description;
	xmlhttp.open('GET',url1,true);
	xmlhttp.send();
	
	
	
	
	
	
}
function receiver()
{
var xmlhttp=new XMLHttpRequest();
var url ="https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0829585b678c492ea688ce9899e48313";
//opening connection to url
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange =function()
{
if(this.readyState==4 && this.status==200)
{
var json=JSON.parse(this.responseText);
var s="";
for(i=0;i<json.articles.length;i++)
	{
	s=s+"<div class='col-lg-4 col-sm-6'>" +
	
	"<div><b>"+json.articles[i].title+"</b></div>"+
	"<div class='row'>"+
	"<div class='col-sm-6'>"+
	"<a href="+json.articles[i].url+">"+
	"<img src="+json.articles[i].urlToImage+" alt='No Image'></div>"+
	"<div class='col-sm-6'>"+json.articles[i].description+"</div>"+
	"</a>" +
	"</div>" +
	
	"<input type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" " +
			"title=\""+json.articles[i].title+"\" " +
			"url=\"" +json.articles[i].url+"\" " +
			"urlToImage=\"" +json.articles[i].urlToImage+"\"" +
			"description=\"" +json.articles[i].description+"\"></div>";
	}

document.getElementById("msg").insertAdjacentHTML('afterbegin',s);


}

};

}
























