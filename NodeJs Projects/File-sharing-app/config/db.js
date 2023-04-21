const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://inShare:IieD8aWOR4oKHPqh@cluster0.wmj4y.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.once('open', function() {
    console.log("connected");
}).on('error', function(error) {
    console.log('error is ', error);
});

/*
function connectDB() {
    //database connection

    try {
        mongoose.connect("http://mongodb:27017/share", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('DataBase connected');
        })
    } catch (err) {
        console.log('connection failed');
    }
}

module.exports = connectDB  */

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customer');

mongoose.connection.once('open',function(){
    console.log("connected");
}).on('error',function(error){
    console.log('error is ',error);
});*/