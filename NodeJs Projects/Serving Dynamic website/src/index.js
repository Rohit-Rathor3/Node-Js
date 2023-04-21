const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


app.set("view engine", "hbs");

// we can easily do routing.
app.get("/", (req, res) => {
    res.render("index", { name: "Rohit Rathor" });
});
app.get("/about", (req, res) => {
    res.render("about", { name: "Rishab", age: 20 });
});

app.listen(8000, () => {
    console.log("Listening at 8000 port");
})