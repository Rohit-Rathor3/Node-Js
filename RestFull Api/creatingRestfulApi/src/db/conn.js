const mongo = require("mongoose");

mongo.connect("mongodb://localhost:27017/students-api", {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection is successful with database")).catch((err) => {
    console.log(err + "No connection");
});