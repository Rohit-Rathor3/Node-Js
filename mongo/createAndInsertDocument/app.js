// step 1-> connect mongoDB to node

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DemoDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } // This is used to avoid deprecated errors
).then(() => console.log("Connected")).catch((err) => console.log(error));

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

const DanceStudent = new mongoose.model('DanceStudent', studentSchema);

// step 4-> Create document and insert data

const createDocument = async() => {
    try {
        const students = new DanceStudent({
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