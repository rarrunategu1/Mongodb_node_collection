const mongoose = require('mongoose');

//Connect to the db before tests run
before(function(done){
  //connect to mongodb
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...'); //this fires if connection is made
    done();
}).on('error', function(error){
    console.log('Connection error:', error);
});  
});
