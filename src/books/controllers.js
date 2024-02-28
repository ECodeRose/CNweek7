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

module.exports = {
  addBook,
  getBooks,
};
