const Book =require( "../models/book");
const { default: CrudRepository } = require("./crudRepository");
class BookRepository extends CrudRepository{
    constructor(){
        super(Book)
    }
}

module.exports=new BookRepository();