/**
 * 
 */

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
	"</div><input type='submit' value='Add to Favourites' onclick='addToFavourites("+json.articles[i].title+")' /></div>";
	}



/*
var sampleText=  "<div class='res'>"+"Words :"+myArr.sample.sampleCount +"<br>"+
                 "Nouns : "+myArr.sample.nouns + "<br>"+
                 "Adjective : "+myArr.sample.adj + "<br>"+
                 "Verb : "+myArr.sample.verb + "<br>"+
                 "Adverbs : "+myArr.sample.verb + "<br>"+
                 "missSpell: "+myArr.sample.missSpell+"</div>";

var sampleText1= "<div class='res'>"+"Words :"+myArr.standard.standardCount + "<br>"+
                 "Nouns : "+myArr.standard.nouns1 + "<br>"+
                 "Adjective : "+myArr.standard.adj1 + "<br>"+
                 "Verb : "+myArr.standard.verb1 + "<br>"+
                 "Adverbs : "+myArr.standard.verb1   + "<br>"+
                 "missSpell: "+myArr.standard.missSpell1+"</div>";
                 
var sampleText2="<div class='res'>"+"Percent WordCount :"+myArr.results.perWordCount + "<br>"+
                 "Percent Nouns : "+myArr.results.perNoun + "<br>"+
                 "Percent Adjective : "+myArr.results.perAdj + "<br>"+
                 "Percent Verb : "+myArr.results.perVerb + "<br>"+
                  "Percent Adverbs : "+myArr.results.perAdv  + "<br>"+
                  "Percent missSpell: "+myArr.results.percentMissSpell+"</div>";
//*/
//document.getElementById("msg").innerHTML=s;
document.getElementById("msg").insertAdjacentHTML('afterbegin',s);


}

};

}
function addToFavourites(articleElement){
	console.log(articleElement);
	
}























