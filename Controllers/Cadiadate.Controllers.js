const { getAllJobsService, getAJobsService } = require("../Services/Cadiadate.Service");

module.exports.getAllJob = async (req, res, next) => {
    try { 
    const fillers = {...req.query};
    const queries = {}
    if(fillers.sort){
        const sortBy = fillers.sort.split(',').join(" ");
        queries.sortBy = sortBy
    }
    if(fillers.type){
        queries.type = fillers.type;
    }
    if(fillers.location){
        queries.location = fillers.location;
    }
    if(fillers.salary){
        queries.salary = fillers.salary;
    }
    const jobs = await getAllJobsService();
  
      res.status(200).json({
        status: "success",
        message: "got it",
        data: jobs,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "can't get the jobs",
        error: err.message,
      });
    }
};

module.exports.getAJob = async (req, res, next) => {
    try { 
    const {id} = req.params
    const job = await getAJobsService(id);
  
      res.status(200).json({
        status: "success",
        message: "got it",
        data: job,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "can't get the job",
        error: err.message,
      });
    }
};
module.exports.applyToAJob = async (req, res, next) => {
    try { 
    const {id} = req.params;
    const job = await applyToAJobService(id);
  
      res.status(200).json({
        status: "success",
        message: "got it",
        data: job,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "can't get the job",
        error: err.message,
      });
    }
};