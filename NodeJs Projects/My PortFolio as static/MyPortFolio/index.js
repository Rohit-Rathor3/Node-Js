const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "/views");
//console.log(staticPath);
//app.set("view engine", "hbs");
//app.set("views", staticPath);

app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.render("./index");
})

app.get("/about.html", (req, res) => {
    res.render("./about");
})


app.listen("8080", () => {
    console.log("Listening at 8080 port");
})

console.log(staticPath);