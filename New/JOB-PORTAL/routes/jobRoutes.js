import express from 'express'
import userAuth from '../middlewares/authMiddleware.js'
import {
    craeteJobController,
    getAllJobsController,
    updateJobController
} from '../controller/jobsController.js'

const router = express.Router()

// routes
// CREATE JOB || POST
router.post('/create-job', userAuth, craeteJobController);

// GET ALL JOBS || GET
router.get('/get-job', userAuth, getAllJobsController);

// UPDATE JOBS || PUT

router.patch("/update-job/:id", userAuth, updateJobController);

export default router;

