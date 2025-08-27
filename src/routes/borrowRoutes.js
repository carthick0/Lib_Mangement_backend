const expres=require("express");

const auth = require("../middlewares/auth");
const { BorrowController } = require("../controllers");


const router=expres.Router();

router.post('/:bookId',auth(["member"]),BorrowController.borrowBook);
router.post('/return/:bookId',auth(["member"]),BorrowController.returnBook);

module.exports=router;