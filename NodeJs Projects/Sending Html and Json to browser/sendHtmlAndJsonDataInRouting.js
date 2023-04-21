const express = require("express");
const app = express();

// let do routing for some pages
// passing html data
app.get("/", (req, res) => {
    res.write("<h1>This is Home Page, visit /about and /contact page also</h1>")
    res.send();
});

// passing javascript object and we can also pass array of object
app.get("/about", (req, res) => {
    res.status(200).send({
        name: "Rohit BHai",
        job: "Software Developer"
    });
});

// passing json data
app.get("/contact", (req, res) => {
    res.json({
        name: "Rishab Jain",
        job: "Youtuber"
    });
});

app.listen(8080, () => {
    console.log("listining at 8080 port number");
});