const assert = require('assert');
const CarOption = require('../models/carOptions');

//Describe tests
describe('Saving records', function(){
    
    //Create tests
    it('saves a record to the database', function(done){
        var car = new CarOption({
            model: 'Lambo'
        });
        
        car.save().then(function(){
            assert(car.isNew === false);//will return either true or false.  Depends on if it was saved to the database
            done();
        });//mongoose gives us the method to save the new car to the database 
        
        
    });
});