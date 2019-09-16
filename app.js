var apiKey = "oXYug8o8rYFHQV2yGSEEqpjq6rOGoz17";


$("#search").on("click", function(){

    var userInput = $("#searchTerm").text();
    var filter = "";
    var numResults = 10;
    var pages = numResults / 10;
    var startYear = $("#startYear").text();
    var endYear = $("#endYear").text();
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=" + apiKey;

    console.log(queryUrl);

    if (filter.length > 0) {
        queryUrl += "&fq=" + filter;
    }
    console.log(startYear);
    console.log(startYear.length);
    if (startYear.length > 0) {
        queryUrl += "&begin_date=" + startYear + "0101";
    }

    if (endYear.length > 0) {
        queryUrl += "&end_date=" + endYear + "1231";
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
    
});

$("#clear").on("click", function() {
    $("#results").empty();
});