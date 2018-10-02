const assert = require('assert');
const CarOption = require('../models/carOptions');

//Describe tests
describe('Updating records', function(){
    
    var car;
    
    beforeEach(function(done){
       car = new CarOption({
            model: 'Lambo',
            weight: 230
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
     
    it('Increments weight by 1', function(done){
     
     CarOption.updateMany({},{$inc: {weight: 1}}).then(function(){ //updates all the records by one
         CarOption.findOne({model: 'Lambo'}).then(function(record){
             assert(record.weight === 231);
             done();
        });
     });
             
});

});

