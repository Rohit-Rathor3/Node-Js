import mongoose from 'mongoose';
const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    dob: { type: Date },
    state: { type: String },
    gender: { type: String },
    location: { type: String },
    pimage: { type: String, required: true },
    rdoc: { type: String, required: true },
})

// creating model
const candidateProfileModel = mongoose.model('candidateProfile', candidateSchema)

export default candidateProfileModel;