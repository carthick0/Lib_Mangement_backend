const { BookService } =require( "../services/index.js");

async function addBook(req, res) {
  try {
    const book = await BookService.addBook(req.body);
    return res.status(201).json(book);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function updateBook(req, res) {
  try {
    const book = await BookService.updateBook(req.params.id, req.body);
    if (!book) return res.status(404).json({ error: "Book not found" });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteBook(req, res) {
  try {
    const book = await BookService.deleteBook(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    return res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await BookService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports= {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
};
