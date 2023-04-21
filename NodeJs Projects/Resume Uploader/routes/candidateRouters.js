import express from 'express';
const router = express.Router();
import CandidateProfileControllers from '../controlers/candidateProfileControlers.js';
import upload from '../middleware/uploads-middlewares.js';
router.use('/resume', upload.fields([{ name: 'pimage', maxCount: 1 }, { name: 'rdoc', maxCount: 1 }]));
// public routers
router.post("/resume", CandidateProfileControllers.saveProfile)
router.get('/list', CandidateProfileControllers.profileList);
export default router;