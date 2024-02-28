const Book = require("./model"); // Import the Book model from the model.js file.

const addBook = async (request, response) => {
  const { title, author, genre } = request.body;
  const newBook = await Book.create({
    title,
    author,
    genre,
  });
  response.status(201).json(newBook);
};

const getBooks = async (request, response) => {
  // get all books from the db
  const books = await Book.find({});
  response.status(200).json({ message: "all the books", books: books });
};

const updateBook = async (request, response) => {
  const { title, author, genre } = request.body;
  const oldBook = request.params.title;

  const updatedBook = await Book.findOneAndUpdate(
    { title: oldBook },
    { title, author, genre }
  );

  response.status(200).json({
    message: "book updated",
    title: oldBook,
    beforeUpdate: updatedBook,
  }); // return the book that was updated (updatedBook);
};

const deleteBook = async (request, response) => {
  const { title } = request.params;

  const deletedBook = await Book.findOneAndDelete({ title: title });

  response.status(200).json({
    message: "book deleted",
    deletedBook: deletedBook,
  });
};

const deleteAllBooks = async (request, response) => {
  try {
    const deleteResult = await Book.deleteMany({});
    response
      .status(200)
      .json({ message: "all books deleted", count: deleteResult.deletedCount });
  } catch (error) {
    response
      .status(500)
      .json({ message: "error deleting books", error: error.message });
  }
};

const getBookByTitle = async (request, response) => {
  try {
    const { title } = request.params;
    const book = await Book.findOne({ title: title });
    if (!book) {
      return response.status(404).json({ message: "book not found" });
    }
    response.status(200).json({ message: "book found", book: book });
  } catch (error) {
    response
      .status(500)
      .json({ message: "error finding book", error: error.message });
  }
};

module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  deleteAllBooks,
  getBookByTitle,
};
