const assert = require('assert');
const CarOption = require('../models/carOptions');

//Describe tests
describe('Deleting records', function(){
    
    var car;
    
    beforeEach(function(done){
       car = new CarOption({
            model: 'Lambo'
        });
        
        car.save().then(function(){
            done();
        });//mongoose gives us the method to save the new car to the database 
        
        
    });  
    
    
    //Create tests
    it('Deletes one record from the database', function(done){
     
     CarOption.findOneAndDelete({model: 'Lambo'}).then(function(){
         CarOption.findOne({model: 'Lambo'}).then(function(result){ //if it finds the record it will return the result
         assert(result === null);  //if it doesn't find the record as it shouldn't, this will assert it.    
         done();
             
         });
     });
});

});