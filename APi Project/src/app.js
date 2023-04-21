const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
//const router = require("./routers/route");
//app.use(router);
const MenRanking = require("./models/mens");
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hiii");
})

// HAndle post request
app.post("/mens", async(req, res) => {
    try {
        const addDetails = new MenRanking(req.body)
        const doc = await addDetails.save();
        console.log(doc);
        res.status(201).send(`Data Saved \n ${doc}`);
    } catch (e) { res.status(400).send(e); }
})

// let use get request
app.get("/mens", async(req, res) => {
        try {
            const getMsg = await MenRanking.find({}).sort({ "ranking": 1 });
            res.status(201).send(getMsg);
        } catch (e) {
            res.status(400).send(e);
        }
    })
    // let get only of one player by ranking
app.get("/mens/:ranking", async(req, res) => {
        try {
            const d = req.params.ranking;
            const getMsg = await MenRanking.find({ ranking: d });
            res.status(201).send(getMsg);
        } catch (e) {
            res.status(500).send(e);
        }
    })
    // let use patch method to update by id 
app.patch("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMsg = await MenRanking.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(getMsg);
    } catch (e) {
        res.status(500).send(e);
    }
})

// let delet document by id
app.delete("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMsg = await MenRanking.findByIdAndDelete(_id, { new: true });
        res.status(201).send(getMsg);
    } catch (e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`listening at ${port}.`);
})