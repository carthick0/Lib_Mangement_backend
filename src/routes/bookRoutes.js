const express=require("express");

const auth  = require("../middlewares/auth");
const { BookController } = require("../controllers");


const router=express.Router();

router.post("/",auth(["admin"]),BookController.addBook);
router.put("/:id",auth(["admin"]),BookController.updateBook);
router.delete("/:id",auth(["admin"]),BookController.deleteBook);

router.get("/",BookController.getAllBooks);

module.exports=router;