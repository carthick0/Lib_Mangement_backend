const userService = require("../services/userService");
const bookService = require("../services/bookService");
const borrowService = require("../services/borrowService");

const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      return await userService.getUser(user.id);
    },

    users: async (_, __, { user }) => {
      if (!user || user.role.toLowerCase() !== "admin") throw new Error("Permission denied");
      return await userService.getAllUsers();
    },

    books: async () => await bookService.getAllBooks(),
  },

  Mutation: {
    register: async (_, args) => await userService.register(args),

    login: async (_, args) => await userService.login(args),

    addBook: async (_, args, { user, requireRole }) => {
      requireRole(user, "admin");
      return await bookService.addBook(args);
    },

    updateBook: async (_, { id, ...data }, { user, requireRole }) => {
      requireRole(user, "admin");
      return await bookService.updateBook(id, data);
    },

    deleteBook: async (_, { id }, { user, requireRole }) => {
      requireRole(user, "admin");
      await bookService.deleteBook(id);
      return "Book deleted successfully";
    },

    borrowBook: async (_, { userId, bookId }, { user, requireRole }) => {
      requireRole(user, "member");
      if (user.id !== userId) throw new Error("You can only borrow books for yourself");
      return await borrowService.borrowBook(userId, bookId);
    },

    returnBook: async (_, { userId, bookId }, { user, requireRole }) => {
      requireRole(user, "member");
      if (user.id !== userId) throw new Error("You can only return books for yourself");
      return await borrowService.returnBook(userId, bookId);
    },
  },

  Borrow: {
    user: async (parent) => await userService.getUser(parent.userId),
    book: async (parent) => {
    const book = await bookService.getBookById(parent.bookId);
    if (!book) {
      throw new Error("Book not found for this borrow record");
    }
    return book;
  },
  },
};

module.exports = resolvers;
