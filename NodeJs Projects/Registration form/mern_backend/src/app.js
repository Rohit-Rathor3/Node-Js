require('dotenv').config({ debug: true });
const express = require("express");
const app = express();
require("./db/conn");
const bcrypt = require("bcrypt");
const Register = require("./models/registers")
const path = require("path");
const hbs = require("hbs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth")
const cookieParser = require("cookie-parser");
const { nextTick } = require('process');
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//const { json } = require("express");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

const port = process.env.PORT || 3800;

//console.log(process.env.SECRETKEY);
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/secret", auth, (req, res) => {
    //console.log(`"This is cookie token " ${req.cookies.jwt}`);
    res.render("secret");
});

app.get("/logout", auth, async(req, res) => {
    try {
        console.log(req.user);
        req.user.tokens = req.user.tokens.filter((currentElem) => {
            return currentElem.token != req.token;
        })

        /* To log out from all devices
          req.user.tokens =[]; */
        res.clearCookie("jwt");
        console.log("Logout Successfull");

        await req.user.save();
        res.render("login");
    } catch (error) {
        res.status(401).send(error);
    }
})

app.get("/register", async(req, res) => {
    res.render("register");
})
app.post("/register", async(req, res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if (password === cpassword) {
            const registeredCustomer = new Register({
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword
            })

            // let generate a token (JWT)
            const token = await registeredCustomer.generateAuthToken();
            console.log("The Token part " + token);

            // The res.cookie() function is used to set the cookie name to value.
            // The value parameters may be a string or object converted to JSON.
            res.cookie("jwt", token, { expires: new Date(Date.now() + 30000), httpOnly: true });
            console.log(cookie);

            const myCustomers = await registeredCustomer.save();
            res.status(201).render("index");

        } else {
            res.send("Password Not match");
        }


    } catch (error) {
        res.status(400).send(error);
    }

})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", async(req, res) => {

    try {
        const email = req.body.email;
        const pass = req.body.passcode;


        const useremail = await Register.findOne({ email: email });

        const passMatch = await bcrypt.compare(pass, useremail.password);


        const token = await useremail.generateAuthToken();
        //console.log("The Tokenpart " + tok);

        // setting cooking
        res.cookie("jwt", token, { expires: new Date(Date.now() + 100000) });

        if (passMatch) {
            res.status(201).render("index");

        } else {
            res.send("Password Is not correct");

        }


    } catch (error) {
        res.status(400).send(error)

    }
})

app.listen(port, () => {
    console.log(`Listening at port no ${port}`);
});