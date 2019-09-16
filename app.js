var apiKey = "oXYug8o8rYFHQV2yGSEEqpjq6rOGoz17";
var userInput = "news";
var filter = "";
var numResults = 10;
var pages = numResults / 10;
var startYear = "1990";
var endYear = "";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=" + apiKey;

if (filter.length > 0) {
    queryUrl += "&fq=" + filter;
}

if (startYear.length > 0) {
    queryUrl += "&begin_date" + startYear + "0101";
}

// if (pages > 0) {
//     queryUrl += "&pages=" + pages;
// }

$.ajax({
    url: queryUrl,
    method: "GET"
})

.then(function (response){
    console.log(response)

});