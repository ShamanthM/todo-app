const { sql, connect } = require('../config/db');  // Import the db.js file to get the connection
const todoRepository = require("../repository/todoRepository");

async function createTableIfNotExists() {
  try {
    await connect(); // Ensure connection is established before using the repository
    await todoRepository.createTableIfNotExists();  // Call repository to create table if needed
  } catch (err) {
    console.error("Error creating table if not exists:", err);
  }
}

async function getAllTodos() {
  try {
    await connect();
    return await todoRepository.getAllTodos();  // Fetch all todos
  } catch (err) {
    console.error("Error fetching all todos:", err);
    throw err;
  }
}

async function getTodoById(id) {
  try {
    await connect();
    return await todoRepository.getTodoById(id);  // Fetch todo by ID
  } catch (err) {
    console.error("Error fetching todo by ID:", err);
    throw err;
  }
}

async function createTodo(task) {
  try {
    await connect();
    return await todoRepository.createTodo(task);  // Create new todo
  } catch (err) {
    console.error("Error creating todo:", err);
    throw err;
  }
}

async function updateTodo(id, task) {
  try {
    await connect();
    return await todoRepository.updateTodo(id, task);  // Update todo by ID
  } catch (err) {
    console.error("Error updating todo:", err);
    throw err;
  }
}

async function deleteTodo(id) {
  try {
    await connect();
    return await todoRepository.deleteTodo(id);  // Delete todo by ID
  } catch (err) {
    console.error("Error deleting todo:", err);
    throw err;
  }
}

module.exports = {
  createTableIfNotExists,
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
