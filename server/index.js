const express = require("express");
const bodyParser = require("body-parser");
const todoController = require("./controller/todoController");
const todoService = require("./service/todoService");

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Ensure the table is created when the server starts
todoService.createTableIfNotExists()
  .then(() => {
    console.log('Table initialized or already exists');
  })
  .catch((err) => {
    console.error('Error during table initialization:', err);
  });

// CRUD APIs using controller methods
app.post("/todos", todoController.createTodo);
app.get("/todos", todoController.getAllTodos);
app.get("/todos/:id", todoController.getTodoById);
app.put("/todos/:id", todoController.updateTodo);
app.delete("/todos/:id", todoController.deleteTodo);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
