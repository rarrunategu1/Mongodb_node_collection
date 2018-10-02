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
            assert(car.isNew === false);//will return either true or false.  Depends on if it was saved to the database
            done();
        });//mongoose gives us the method to save the new car to the database 
        
        
    });  
    
    
    //Create tests
    it('Deletes one record from the database', function(done){
     
     CarOption.findOneAndRemove({model: 'Lambo'}).then(function(){
         CarOption.findOne({model: 'Lambo'}).then(function(result){ //if it finds the record it will return the result
         assert(result === null);  //if it doesn't find the record as it shouldn't, this will assert it.    
         done();
             
         });
     });
});

});