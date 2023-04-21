const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "../");

app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.render("/calculator");
})

app.get("/about.html", (req, res) => {
    res.render("./about");
})


app.listen("8080", () => {
    console.log("Listening at 8080 port");
})
console.log(staticPath);