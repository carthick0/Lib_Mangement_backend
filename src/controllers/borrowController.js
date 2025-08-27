const { BorrowService } = require("../services");

async function borrowBook(req, res) {
  try {
    const userId = req.user.id; 
    const { bookId } = req.params;

    const borrow = await BorrowService.borrowBook(userId, bookId);
    return res.status(200).json({ message: "Book borrowed successfully", borrow });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function returnBook(req, res) {
  try {
    const userId = req.user.id;
    const { bookId } = req.params;

    const record = await BorrowService.returnBook(userId, bookId);
    return res.status(200).json({ message: "Book returned successfully", record });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}



module.exports = {
  borrowBook,
  returnBook,

};
