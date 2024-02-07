const express = require("express");

const app = express();

// HTTP Verbs - GET, POST, PUT, DELETE

// const response = await fetch("http://someaddress.com"); // sends GET request

// HTTP Verb GET

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  console.log("/books: ", request.path);
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/getfirstbook", (request, response) => {
  // get the first book
  console.log("/books/books: ", request.path);
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("/books", (request, response) => {
  console.log("title: ", request.body.title);
  console.log("genre: ", request.body.genre);
  console.log("author: ", request.body.author);

  fakeArr.push(request.body);

  let awesome;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awesome = "it's awesome";
    }
  }
  console.log(awesome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

app.put("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // change (update) the author to an new name
  const newAuthor = request.body; // Get the new author from the request body
  console.log(newAuthor);
  // Find the book in fakeArr by its title
  const bookToUpdate = fakeArr.find((book) => book.title === newAuthor.title);

  // If the book is found, update its author
  if (bookToUpdate) {
    bookToUpdate.author = newAuthor.author;
    response.send({ message: "success", updatedBook: bookToUpdate });
    return; // Exit the function after sending the response
  }

  // If the book is not found, send a 404 error response
  response.status(404).send({ message: "Book not found" });
});

app.delete("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // remove (delete) the element from the array
  // Find the index of the book in fakeArr by its title
  const indexToDelete = fakeArr.findIndex(
    (book) => book.title === request.body.title
  );

  // If the book is found, remove it from the array
  if (indexToDelete !== -1) {
    const deletedBook = fakeArr.splice(indexToDelete, 1)[0];
    response.send({ message: "success", deletedBook });
    return;
  }

  response.status(404).send({ message: "Book not found" });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
