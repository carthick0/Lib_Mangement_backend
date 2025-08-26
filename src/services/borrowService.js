const bookRepository = require("../repositories/bookRepository");
const borrowRepository = require("../repositories/borrowRepository");

async function borrowBook(userId, bookId){
  try {
    const updatedBook = await bookRepository.findOneAndUpdate(
      { _id: bookId, copies: { $gt: 0 } }, 
      { $inc: { copies: -1 } },
      { new: true }
    );
    if (!updatedBook) throw new Error("Book not available");
    const borrow = await borrowRepository.create({ userId, bookId });
    return borrow;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function returnBook(userId, bookId){
  try {
    const borrow = await borrowRepository.findOne({ userId, bookId, returnedAt: null });
    if (!borrow) throw new Error("No active borrow record");
    borrow.returnedAt = new Date();
    await borrow.save();
    await bookRepository.findByIdAndUpdate(bookId, { $inc: { copies: 1 } }, { new: true });
    return borrow;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


module.exports={
    borrowBook,
    returnBook
}