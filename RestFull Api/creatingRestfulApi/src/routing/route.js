// Here , i will use routing for all pages */ // Here is bug i this file
const express = require("express");
const studentApi = require("../models/students");

const route = express.Router();
route.get("/rohit", (req, res) => {
    res.send("hekkodfsdgsdf");
})

//route.use(studentApi);


// Let use get method ->  to read
route.get("/students", async(req, res) => {
    try {
        const result = await studentApi.find();
        res.status(201).send(result);

    } catch (e) {
        res.status(400).send(e);
    }
})

// let use post method
route.post("/students", async(req, res) => {
    try {
        const user = new studentApi(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(req.body);

    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})



// export route
module.exports = route;