var apiKey = "oXYug8o8rYFHQV2yGSEEqpjq6rOGoz17";
var userInput = "news";
var filter = "";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=" + apiKey;

if (filter.length > 0) {
    queryUrl += "&fq=" + filter;
}

$.ajax({
    url: queryUrl,
    method: "GET"
})

.then(function (response){
    console.log(response)

});