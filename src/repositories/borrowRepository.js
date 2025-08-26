const Borrow = require("../models/borrow")
const { default: CrudRepository } = require("./crudRepository");
class BorrowRepository extends CrudRepository{
    constructor(){
        super(Borrow)
    }
}

module.exports=new BorrowRepository();