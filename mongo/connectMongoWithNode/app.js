// we will mongoose library to conect mongoDB to node.js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DemoDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } // This is used to avoid deprecated errors
).then(() => console.log("Connected")).catch((err) => console.log(error));