// Importing the Express library to create the server
const express = require("express");

// Importing the book routes, which define the routes for managing books
const bookRoutes = require("./routes/bookRoutes");

// Creating an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
// This allows the server to read and process JSON data in the request body
app.use(express.json());

// Registering the book routes with the root URL ('/')
// Any requests related to books (e.g., '/books') will be handled by the bookRoutes
app.use("/", bookRoutes);

// Starting the server and making it listen on port 3000
// Once the server is up, it will print a message to the console indicating the server is running
app.listen(3000, () => {
    console.log('Server started listening at port 3000');
});
