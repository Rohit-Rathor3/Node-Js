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

// step 4-> Create document and insert data

const updateDocument = async(id) => {
    try {
        // we can use also , findByIdAndUpdate(id) function.
        const updatedDoc = await DanceStudent.updateOne({ _id: id }, {

            $set: {
                age: 40,
                name: "Ramprasad"
            }

        }, {
            new: true
        });

        console.log(updatedDoc);
    } catch (err) {
        console.log(err);
    }
}
updateDocument("62b2eba8c30e9cab6149e408");