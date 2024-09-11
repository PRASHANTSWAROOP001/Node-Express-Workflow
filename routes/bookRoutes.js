// Importing the Express library
const express = require("express");

// Importing the bookController that contains the logic for handling book-related requests
const bookController = require("../controller/bookController");

// Creating a new Express router instance to handle routing for books
const router = express.Router();

// Defining a GET route for fetching all books
// This route listens for GET requests at '/books' and calls the 'getBooks' method from the bookController
router.get("/books", bookController.getBooks);

// Defining a POST route for creating a new book
// This route listens for POST requests at '/books' and calls the 'createBook' method from the bookController
router.post("/books", bookController.createBook);

// Defining a PUT route for updating an existing book by its ID
// The ':id' is a route parameter representing the ID of the book to update
// This route listens for PUT requests at '/books/:id' and calls the 'updateBook' method from the bookController
router.put("/books/:id", bookController.updateBook);

// Defining a DELETE route for deleting a book by its ID
// The ':id' is a route parameter representing the ID of the book to delete
// This route listens for DELETE requests at '/books/:id' and calls the 'deleteBook' method from the bookController
router.delete("/books/:id", bookController.deleteBook);

// Exporting the router so it can be used in other parts of the application
module.exports = router;
