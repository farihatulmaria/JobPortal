const Users = require("../Models/User.Models")

module.exports.signUpService = async (userInfo)=>{
    const newUser = await Users.create(userInfo);
    console.log(userInfo);
    console.log(newUser);
    return newUser;
}
module.exports.getUserByEmail = async (email)=> {
    const result = await Users.findOne({email:email})
    return result;
};
module.exports.getUserByToken = async (token)=> {
    const result = await Users.findOne({token:token});
    return result;
};
