const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const BookSchema = new Schema({
    title: String,
    pages: Number
});    
    
const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books:[BookSchema]
});

const Author = mongoose.model('author', AuthorSchema); //whenever a new car option is added the 'model' will be created in the caroption collection using the CarOptionSchema

module.exports = Author; //will allow me to use this in other files