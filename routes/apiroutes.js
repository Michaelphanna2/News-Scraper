const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function (app) {
  app.get("/api/scrape", function (req, res) {
    console.log("scraping...");

    // Ken explained this to you - remember your notes. Tthis goes out to the news source
    axios.get("https://www.buzzfeed.com/")
      
    
    .then(function (res) {   
        let $ = cheerio.load(res.data);
                db.Article.deleteMany(function (err, p) {
          if (err) {
            throw err;
          } else {
            console.log('# deleted:' + JSON.stringify(p));
          }
        });

  // Need routes to pull mongo data and push it