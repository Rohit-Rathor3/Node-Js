const db = "mongodb+srv://rohit:rohit123@cluster0.lvqcl.mongodb.net/demo";
//const db = "mongodb://localhost:27017/DemoDB";
const mongoose = require("mongoose");
mongoose.connect(db).then(() => {
    console.log("connected")
}).catch((err) => {
    console.log(`not connected ${err}`);
})



// step 2-> define schema 

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    class: {
        type: Number,
            required: true
    },
    DOB: {
        type: Date,
        default: Date.now
    },
    active: Boolean
})

// step 3-> create collection name

const roughData = new mongoose.model('roughdata', studentSchema);

// step 4-> Create document and insert data

const createDocument = async() => {
    try {
        const students = new roughData({
            name: "Rishab Jain",
            age: 20,
            class: 12,
            active: true
        })
        const result = await students.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
createDocument();