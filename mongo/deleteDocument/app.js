// step 1-> connect mongoDB to node

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DemoDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
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

// Deleting the document
const deleteDoc = async(id) => {
    try { // we can use findByIdDelete() method also.
        const deldoc = await DanceStudent.findByIdAndDelete({ _id: id });
        console.log(deldoc)
    } catch (err) {
        console.log(err);
    }
}

deleteDoc("62b2df2294aff27c68ba560b");