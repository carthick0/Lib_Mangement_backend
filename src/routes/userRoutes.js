const express=require("express");

const  auth = require("../middlewares/auth");
const { UserController } = require("../controllers");

const router=express.Router();

router.post("/register",UserController.register);
router.post('/login',UserController.login);
router.get("/:id", auth(), UserController.getUser); 
router.get("/", auth(["admin"]), UserController.getAllUsers); 

module.exports=router;