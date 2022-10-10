const Users = require("../Models/User.Models")

module.exports.signUpService = async (userInfo)=>{
    const newUser = await Users.create(userInfo);
    return newUser;
}

module.exports.getUserByEmail = async (email)=> return await Users.findOne({email:email});
module.exports.getUserByToken = async (token)=> return await Users.findOne({token:token});
