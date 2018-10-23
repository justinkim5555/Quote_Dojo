var express = require('express');

var app = express();
// ------ Express Files ------


// ------  Static Path ------
var path = require('path'); // helps us use filepaths
app.use(express.static(path.join(__dirname, './static')));

// ----- Body Parser ------
var bodyParser = require('body-parser');

//
app.use(bodyParser.urlencoded({ extended: true }));



app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ---- Mongoose -------
mongoose.connect('mongodb://localhost/quote_mongoose');




// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})


app.get('/survey', function(req, res) {
    Quote.find({},function(err,quotes){
      if (err){
        console.log("error");
      }
      else{
        var existingQuotes = quotes;
        console.log(existingQuotes);
        res.render('survey',{quotes:existingQuotes});
      }

    })
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
})


// Add User Request
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    console.log("we received the post", req.body);
    var quote = new Quote({name:req.body.name, quote:req.body.quote})

    quote.save(function(err){
      if(err){
        console.log("something went wrong in the POST process");
      }
      else{
        console.log("Successfully added things via POST");
      }
      res.redirect('/');
    })
  })

    // This is where we would add the user from req.body to the database.



const server = app.listen(8001, function() {
console.log("we're live at 8001");
})
