const mongo = require("mongoose");
const valid = require("validator");

// creating schema
const studentSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    email: {
        type: String,
        requird: true,
        unique: [true, "Email exits"],
        validate(val) {
            if (!valid.isEmail(val)) {
                throw new Error("You enteres invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        //maxLength: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    }
})

// creating collection
const ApiStudent = new mongo.model('ApiStudent', studentSchema);

// export the collection
module.exports = ApiStudent;