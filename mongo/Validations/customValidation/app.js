// step 1-> connect mongoDB to node

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DemoDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } // This is used to avoid deprecated errors
).then(() => console.log("Connected")).catch((err) => console.log(error));

// step 2-> define schema 
// let make custom valodation on  age field so, no one can enter wiered input

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        /*
               validate(val) {
                   if (val <= 0) {
                       throw new error("Age can not be less than or euqal to zero");
                   } */ // we can use also this way
        validate: {
            validator: function(val) {
                return val.legth < 0

            },
            message: "Value not be less than zero"
        },
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
            age: 0,
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