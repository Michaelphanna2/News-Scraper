// still unsure of this 
//still need to create models


const db = require('../models');

module.exports = function (app) {

  app.get('/', function (req, res) {
    db.Article.find({}, (error, dbArticle) => {
      if (error) {
        console.log(error);
      }
      console.log(dbArticle)
      res.render('index', {
        articles: dbArticle
      });
    })
  });


  app.get('/savedArticle', function (req, res) {
db.Article.find({
      saved: true
    }, (error, savedArticle) => {
      if (error) {
        console.log(error);
      }
      console.log(savedArticle)
      res.render('savedArticle', {
        savedArticles: savedArticle
      });
    })
  });
}