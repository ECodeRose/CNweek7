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

module.exports = {
  addBook,
};
