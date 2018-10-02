const assert = require('assert');
const CarOption = require('../models/carOptions');

//Describe tests
describe('Updating records', function(){
    
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
    it('Updates one record from the database', function(done){
     
     CarOption.findOneAndUpdate({model: 'Lambo'}, {model: 'Ferrari'}).then(function(){
        CarOption.findOne({_id: car._id}).then(function(result){
            assert(result.model === 'Ferrari');
            done();
        });
     });
             
        
    
});

});