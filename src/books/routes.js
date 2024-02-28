const { Router } = require("express");

const bookRouter = Router();

const {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  deleteAllBooks,
  getBookByTitle,
} = require("./controllers");

bookRouter.post("/", addBook);

bookRouter.get("/", getBooks);
bookRouter.get("/:title", getBookByTitle);

bookRouter.put("/:title", updateBook);

bookRouter.delete("/:title", deleteBook);
bookRouter.delete("/", deleteAllBooks);

module.exports = bookRouter;
