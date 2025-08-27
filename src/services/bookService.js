const bookRepository = require("../repositories/bookRepository");

async function addBook(data){
    try {
        const book=await bookRepository.create(data);
        return book;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateBook(id,data){
    try {
        const book=await bookRepository.update(id,data,{new:true});
        return book;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteBook(id){
    try {
        const book=await bookRepository.delete(id);
        return book
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getAllBooks(){
    try {
        const books=await bookRepository.getAll();
        return books;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function getBookById(id){
    try {
        const book=await bookRepository.findOne(id);
        return book
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports={
    addBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getBookById
}