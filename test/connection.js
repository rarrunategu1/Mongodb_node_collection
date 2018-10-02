const mongoose = require('mongoose');

//Connect to the db before tests run
before(function(done){
  //connect to mongodb
mongoose.connect('mongodb://titamandarica34:Freedom1!@ds117719.mlab.com:17719/testaroo', { useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...'); //this fires if connection is made
    done();
}).on('error', function(error){
    console.log('Connection error:', error);
});  
});

//empty database before every test so that each one can run alone
beforeEach(function(done){
   //Drop collection
   mongoose.connection.collections.caroptions.drop(function(){
       done();
});
});