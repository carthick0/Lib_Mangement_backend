const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("./serverConfig");

const generateToken=(user)=>{
    return jwt.sign({id:user._id,role:user.role},JWT_SECRET,{
        expiresIn:'1d'
    });
};

module.exports=generateToken;