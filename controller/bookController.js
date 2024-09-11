// A sample array of book objects, simulating a database
let books = [
    {id: 1, title: "Wings Of Fire", author: "xyz"},
    {id: 2, title: "Gulam Giri", author: "Jyotiba Phule"},
];

// Handler for fetching all books
// Sends the entire 'books' array as a JSON response
const getBooks = (req, res) => {
    res.json(books);  // Responds with the current list of books
};

// Handler for creating a new book
// Adds the book sent in the request body to the 'books' array
const createBook = (req, res) => {
    console.log(req.body);  // Logs the request body to see the data sent by the client

    const newbook = req.body;   // Retrieves the book data from the request body
    newbook.id = books.length + 1;  // Assigns a unique ID to the new book (incremented from the last book's ID)
    books.push(newbook);  // Adds the new book to the 'books' array
    res.status(201).json(newbook);  // Sends the newly created book as the response with status 201 (Created)
};

// Handler for updating an existing book by ID
// Replaces the properties of the specified book with new values from the request body
const updateBook = (req, res) => {
    const id = parseInt(req.params.id);  // Retrieves the book ID from the URL params and converts it to an integer
    const updatedBook = req.body;  // Retrieves the updated book data from the request body
    const index = books.findIndex((book) => book.id === id);  // Finds the index of the book to be updated

    if (index !== -1) {
        // If book is found, update its properties by merging the existing data with the new data
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);  // Responds with the updated book
    } else {
        res.status(404).json({ "error": "Book not found" });  // If the book with the given ID doesn't exist, return 404 (Not Found)
    }
};

// Handler for deleting a book by ID
// Removes the book with the specified ID from the 'books' array
const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);  // Retrieves the book ID from the URL params and converts it to an integer
    const index = books.findIndex((book) => book.id === id);  // Finds the index of the book to be deleted

    if (index !== -1) {
        const deletedBook = books[index];  // Stores the book to be deleted for the response
        books.splice(index, 1);  // Removes the book from the 'books' array
        res.json(deletedBook);  // Responds with the deleted book
    } else {
        return res.status(404).json({ "error": "Book not found" });  // If the book with the given ID doesn't exist, return 404 (Not Found)
    }
};

// Exporting the handler functions so they can be used in routing
module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};
