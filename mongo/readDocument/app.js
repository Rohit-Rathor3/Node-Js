// connecting mongoDB to node
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DemoDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } // This is used to avoid deprecated errors
).then(() => console.log("Connected")).catch((err) => console.log(error));

//creating schema
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
    // creating collction name , here this collection exits already
const DanceStudent = new mongoose.model('DanceStudent', studentSchema);

// reading documents from the data base
// Here we have already a database name "DemoDB" with collection "DanceStudent"
/*
const getDocument = async() => {
    const result = await DanceStudent.find();
    console.log(result);
}

getDocument();*/

// we can also query our data to get particular data only

const getQueryData = async() => {
    // This will show document without class and age
    const data = await DanceStudent.find({ name: "Rohit Rathor" }, { class: 0 }).select({ age: 0 })
    console.log(data);
}
getQueryData();
console.log("---------------------------------------------------");

// note :- we can also use "comparision operators to query the data"
/* There are basically six operators in mongoDb
1. $gt -> syntax:- {field:{$gt:value}}  it will return all documents with greater than that value.
2. $gte -> syntax:- {field:{$gte:value}} it will return all documents with greater than and equal to that value 
3. $lt -> syntax:- {field:{$lt:value}}  it will return all documents with less than that value
4. $lte -> syntax:- syntax:- {field:{$lte:value}}  it will return less than and equal value
5. $in -> syntax:- {field:{$in:[val1,val2,....]}} -> it will match value with more than one value
                   and documents of matched value will be returned
6. $ine ->syntax:- {field:{$ine:[val1,val2,....]}} it is just oposite to the $in operator */

// let see one example of $gt operator

const greaterDoc = async() => {
    const doc = await DanceStudent.find({ age: { $gt: 20 } });
    console.log(doc);
}

greaterDoc();


/* There is also logical query oeartors in mongodb .
  There are specialy four opartors  
  1. $and :- joins query clauses with a logical AND returns all docs that match the condtions of both clauses
  2. $not :- inverts the effect of a query expression and returns all docs that do not match the query expression
  3. $nor :- joins query clauses with a logical NOR returns all docs that fail to match both clauses.
  4. $or :- joins query clauses with a logical OR returns all docs that match the condtions of either clauses  
*/

// let see example of OR opeartor

const getDoc = async() => {
    const re = await DanceStudent.find({ $or: [{ name: "Rohit Rathor" }, { age: { $gte: 20 } }] });
    console.log(re);
}

getDoc();