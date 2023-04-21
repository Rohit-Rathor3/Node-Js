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


const getDocument = async() => {
    const result = await DanceStudent.find().countDocuments();
    console.log(result);
}

getDocument();

//sorting documents 
// This function will sort document by name in asecnding order

const sortAsending = async() => {
    const ascResult = await DanceStudent.find().select({ name: 1 }).sort({ name: 1 });
    console.log(ascResult);
}
sortAsending();

// This function will sort document by age in descending order
const sortDesceding = async() => {
    const ascResult = await DanceStudent.find().sort({ age: -1 });
    console.log(ascResult);
}
sortDesceding();