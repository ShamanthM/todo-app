const todoService = require("../service/todoService");

const createTodo = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ message: "Task is required" });
    }
    const result = await todoService.createTodo(task);
    res.status(201).json({ message: "Todo created successfully", result });
  } catch (err) {
    res.status(500).json({ message: "Error creating todo", error: err.message });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching all todos", error: err.message });
  }
};

const getTodoById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = await todoService.getTodoById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Error fetching todo by ID", error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ message: "Task is required" });
    }
    const result = await todoService.updateTodo(id, task);
    res.json({ message: "Todo updated successfully", result });
  } catch (err) {
    res.status(500).json({ message: "Error updating todo", error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await todoService.deleteTodo(id);
    res.json({ message: "Todo deleted successfully", result });
  } catch (err) {
    res.status(500).json({ message: "Error deleting todo", error: err.message });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo
};
