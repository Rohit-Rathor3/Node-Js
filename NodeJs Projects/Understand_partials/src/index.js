const express =require("express");
const app =express();
const path = require("path");
const hbs=require("hbs");

// built-in middleware

/*const static=path.join(__dirname,"./style");
app.use(express.static(static));
*/
const partialPath = path.join(__dirname,"./partials");
app.set("view engine","hbs");
//console.log(partialPath);
hbs.registerPartials(partialPath);
//app.set("views",templatePath);
 // we can easily do routing.
app.get("/",(req,res)=>{
    res.render("index",{name:"Rohit Rathor"});
});
app.get("/about",(req,res)=>{
    res.render("about",{name:"Rishab",age:20});
});

// adding error page inside the about/ page
app.get("/about/*",(req,res)=>{
    res.send("PAge not found!!!!!!!!!!!!!!!!!!");
})

// adding 404 error page
app.get("*",(req,res)=>{
    res.render("404",{error:"Page Not Found -> Error 404 !"});
})

app.listen(8000,()=>{
    console.log("Listening at 8000 port");
})
