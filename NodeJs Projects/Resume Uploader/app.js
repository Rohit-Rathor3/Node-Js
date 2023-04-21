import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from './config/connectDB.js';
import candidateRouters from './routes/candidateRouters.js';
import upload from './middleware/uploads-middlewares.js';
const app = express();
const port = 3000 || process.env.PORT;
// cors policy
app.use(cors());

app.use(express.json());
//
connectDB("mongodb://localhost:27017");
// load routes
app.use('/api', candidateRouters)
app.listen(port, () => {
    console.log(`server listening at ${port}`);
})