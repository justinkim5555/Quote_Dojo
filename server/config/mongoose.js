var mongoose = require('mongoose');

// This is the JS object that defines the schema of our database
var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
