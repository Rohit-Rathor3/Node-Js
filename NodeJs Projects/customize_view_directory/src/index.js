const express = require("express");
const app = express();
const path = require("path");


// built-in middleware
/*
const static=path.join(__dirname,"../public");
app.use(express.static(static));
*/
const templatePath = path.join(__dirname, "./templates");
app.set("view engine", "hbs");
app.set("views", templatePath);

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