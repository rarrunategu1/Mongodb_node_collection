const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const CarOptionSchema = new Schema({
    model: String,
    weight: Number
});

const CarOption = mongoose.model('caroption'.CarOptionSchema); //whenever a new car option is added the 'model' will be created in the caroption collection using the CarOptionSchema

module.exports = CarOption; //will allow me to use this in other files