const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customer');

mongoose.connection.once('open',function(){
    console.log("connected");
}).on('error',function(error){
    console.log('error is ',error);
});