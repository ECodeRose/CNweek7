const { Router } = require("express");

const bookRouter = Router();

const { addBook, getBooks } = require("./controllers");

bookRouter.post("/", addBook);

// https://mongoosejs.com/docs/api/model.html#Model.find()
bookRouter.get("/", getBooks);

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
bookRouter.put("/", async (request, reponse) => {
  // update a single book's author by title
});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
bookRouter.delete("/", (request, response) => {});

module.exports = bookRouter;
