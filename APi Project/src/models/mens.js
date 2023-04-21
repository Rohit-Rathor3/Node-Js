const mongo = require("mongoose");

const menSchema = new mongo.Schema({

        ranking: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        dob: {
            type: Date,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        score: {
            type: Number,
            required: true,
            trim: true
        },
        event: {
            type: String,
            default: "100m"
        }

    })
    // creating collection
const MenRanking = new mongo.model('MenRanking', menSchema)
module.exports = MenRanking;