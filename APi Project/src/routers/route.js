const express = require("express"); // some bugs
const router = express.Router();
const MenRanking = require("../models/mens");
//router.use(MenRanking);

router.post("/mens", async(req, res) => {
    try {
        const addDetails = new MenRanking(req.body)
        const doc = await addDetails.save();
        console.log(doc);
        res.status(201).send(`Data Saved \n ${doc}`);
    } catch (e) { res.status(400).send(e); }
})

router.get("/mens", async(req, res) => {
    try {
        const getMsg = await MenRanking.find({}).sort({ "ranking": 1 });
        res.status(201).send(getMsg);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/mens/:ranking", async(req, res) => {
    try {
        const d = req.params.ranking;
        const getMsg = await MenRanking.find({ ranking: d });
        res.status(201).send(getMsg);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMsg = await MenRanking.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(getMsg);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.delete("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMsg = await MenRanking.findByIdAndDelete(_id, { new: true });
        res.status(201).send(getMsg);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;