var apiKey = "oXYug8o8rYFHQV2yGSEEqpjq6rOGoz17";
var userInput = "news";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=" + apiKey;

$.ajax({
    url: queryUrl,
    method: "GET"
})

.then(function (response){
console.log(response)

});