const { Router } = require("express");

const bookRouter = Router();

const { addBook } = require("./controllers");

bookRouter.post("/books", addBook);

// https://mongoosejs.com/docs/api/model.html#Model.find()
bookRouter.get("/books", async (request, response) => {
  // get all books from the db
  const books = await Book.find({});
  response.send({ message: "all the books", books: books });
});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
bookRouter.put("/books", async (request, reponse) => {
  // update a single book's author by title
});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
bookRouter.delete("/books", (request, response) => {});

module.exports = bookRouter;
