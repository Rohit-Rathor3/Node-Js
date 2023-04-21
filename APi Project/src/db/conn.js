const mongo = require("mongoose");
mongo.connect("mongodb://localhost:27017/olympics", {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("Database connected") }).catch((err) => { console.log(err); })