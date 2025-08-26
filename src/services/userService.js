const generateToken = require("../config/jwt");
const userRepository = require("../repositories/userRepository");

async function register({name,email,password,role}){
    try {
        const user=await userRepository.create({
            name,
            email,
            password,
            role
        });
        const token=generateToken(user);
        return {user,token};
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function login({email,password}){
    try{
        const user=await userRepository.findByEmail(email);
        if (!user) throw new Error("User not found");

        const isMatch=await user.comparePassword(password);
        if (!isMatch) throw new Error("Incorrect password");
        
        const token=generateToken(user);
        return {user,token}
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

async function getUser(id){
    try {
        const user=await userRepository.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getAllUsers(){
    try {
        const user=await userRepository.getAll();
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports={
    register,
    login,
    getUser,
    getAllUsers
}