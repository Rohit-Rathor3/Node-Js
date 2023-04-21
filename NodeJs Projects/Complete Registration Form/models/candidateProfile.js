import mongoose from 'mongoose';
const candidateSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    dob: { type: Date },
    state: { type: String },
    gender: { type: String },
    location: { type: String },
})

// creating model
const candidateProfileModel = mongoose.model('candidateprofiledemo', candidateSchema)

export default candidateProfileModel;