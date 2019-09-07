// Grab the articles as a json
$(document).on("click", "#displayBtn", function() {


$.getJSON("/articles", function(data) {

  for (var i = 0; i < data.length; i++) {

    $("#news").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    // $("#news").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link +  "<br />" + data[i].summary+"</p>");
  }
});
});

$(document).on("click", "#scrapeBtn", function() {
  $.get("/scrape");
});
