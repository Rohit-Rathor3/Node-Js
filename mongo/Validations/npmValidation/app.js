// we have to install "validator"
// step 1-> connect mongoDB to node

// Let validate email
const valid = require("validator"); // There are many inbuilt methods in validator npm pakages , Google for More!

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
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {
            if (!valid.isEmail(value)) {
                throw new Error("Email is not valid")
            }
        }

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
            email: "rohit@hmail.com",
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