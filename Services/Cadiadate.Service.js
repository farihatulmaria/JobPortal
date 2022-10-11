const Jobs  = require('../Models/Jobs.Models');

module.exports.getAllJobsService = async ()=>{
    const allJobs = await Jobs.find();
    return allJobs;
}
module.exports.getAJobsService = async (JobId)=>{
    const job = await Jobs.find({_id:JobId});
    return job;
}
module.exports.applyToAJobService = async (JobId)=>{
    const job = await Jobs.find({_id:JobId});
    return job;
}