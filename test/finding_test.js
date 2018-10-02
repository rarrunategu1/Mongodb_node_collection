const assert = require('assert');
const CarOption = require('../models/carOptions');

//Describe tests
describe('Finding records', function(){
    
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
    it('Finds one record from the database', function(done){
     
     CarOption.findOne({model: 'Lambo'}).then(function(result){
        assert(result.model === 'Lambo');
        done();
     });  
});

it('Finds one record by ID from the database', function(done){
     
     CarOption.findOne({_id: car._id}).then(function(result){
        assert(result._id.toString === car._id.toString); //using toString converts the objects to something that can be asserted
        done();
     }); 
});

});
