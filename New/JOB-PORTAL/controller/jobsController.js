
import jobsModel from "../models/jobsModel.js"

//==========  CREATE JOB  ========
export const craeteJobController = async (req, res, next) => {
    const { company, position } = req.body
    if (!company || !position) {
        next('Please Provide All Fields')
    }
    req.body.createdBy = req.user.userId
    const job = await jobsModel.create(req.body);
    res.status(201).json({ job });



};

// =======   GET JOB =====

export const getAllJobsController = async (req, res, next) => {
    const jobs = await jobsModel.find({ createdBy: req.user.userId })

    res.status(200).json({
        totalJobs: jobs.length,
        jobs,

    })
};

// ====== UPDATE JOBS =====

export const updateJobController = async (req, res, next) => {

    const { id } = req.params
    const { company, position } = req.body

    //  validation
    if (!company || !position) {
        next('Please Provide All Fields')
    }

    // find job
    const job = await jobsModel.findOne({ _id: id })

    // validation

    if (!job) {
        next(`No Job Found with this id ${id}`)
    }
    if (req.user.userId === job.createdBy.toString()) {
        return
        next('You are not authorized to update this job')
    }

    const updateJob = await jobsModel.findOneAndUpdate(id, req.body,
        {
            new: true,
            runValidators: true,
        })

    res.status(200).json({ updateJob });


};