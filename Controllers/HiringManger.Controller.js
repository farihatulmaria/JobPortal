module.exports.addAJob = async(req,res)=>{
    try {
        
        res.status(200).json({
            status:'passed',
            message:"Added the Job",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"Can't add the job, sorry",
            error:err.message
        })
    }
}