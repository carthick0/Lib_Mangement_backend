const borrow = require("../models/borrow")
const CrudRepository =require("./crudRepository")
class BorrowRepository extends CrudRepository{
    constructor(){
        super(borrow)
    }
}

module.exports=new BorrowRepository();