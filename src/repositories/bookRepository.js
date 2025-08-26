const book =require( "../models/book");
const CrudRepository =require( "./crudRepository");

class BookRepository extends CrudRepository{
    constructor(){
        super(book)
    }
}