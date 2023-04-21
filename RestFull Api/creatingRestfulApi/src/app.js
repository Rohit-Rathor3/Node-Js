const express = require("express");
require("./db/conn");
//const route = require("./routing/route");
const studentApi = require("./models/students")

const app = express();
const port = process.env.PORT || 8000;
//app.use(route);
app.use(express.json());

// create new registration of student , we are saving through promises
// we can also use aysnc and await while saving the data , then we don't need to write then() and catch().app.post("/students", (req, res) => {
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new studentApi(req.body);
    user.save().then(() => { res.status(201).send(user) }).catch((err) => {
        res.status(400).send(err)
    })
});


//     ---------------- I will use router in separate file so our code will look clean ---------------
// let use async and await to perform post request , we have to use try and catch.
app.post("/students", async(req, res) => {
    try {
        const user = new studentApi(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(req.body);

    } catch (err) { res.status(400).send(err); }
})

// let use get request
app.get("/students", async(req, res) => {
    try {
        const result = await studentApi.find();
        res.status(201).send(result);

    } catch (e) {
        res.status(400).send(e);
    }
})

// let get data of particular student
app.get("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const partiStudent = await studentApi.findById(_id);
        if (!partiStudent) {
            res.status(400).send();
        } else {
            res.status(201).send(partiStudent);
            console.log(partiStudent);
        }

    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
})

// let use delete request of a particular student by id
app.delete("/students/:id", async(req, res) => {
    try {
        const deletedStudent = await studentApi.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deletedStudent);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }

})

// Let use patch/put request , i mean update a document's detials by id
app.patch("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await studentApi.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(updateStudent);
        console.log(updateStudent);
    } catch (err) {
        res.status(400).send();
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`${port} listening `)
})