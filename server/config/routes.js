var quotes = require('../controllers/quotes.js');

module.exports = function(app){
  app.get('/', quotes.index);
  app.get('/survey', quotes.find);
  app.post('/quotes', quotes.add);
}
