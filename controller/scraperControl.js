
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

module.exports = function (app) {

app.get("/", function(req, res){
res.send("index.html");
});


// A GET route for scraping
app.get("/scrape", function(req, res) {
  axios.get("https://techcrunch.com/").then(function(response) {

    var $ = cheerio.load(response.data);

    $("a.post-block__title__link").each(function(i, element) {
      var result = {};

      result.title = $(this).text().trim();
      result.link = $(this).parents().children("a.post-block__title__link").attr("href");
      result.summary = $(this).parents().children("div.post-block__content").text().trim();

      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
    // Send a message to the client
    res.send("Scrape Complete");
  });
});

app.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//Route for notes ++++++++++++++++++++++


}
