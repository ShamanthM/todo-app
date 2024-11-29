const { sql } = require('../config/db');

async function createTableIfNotExists() {
  const query = `
    IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Todos')
    CREATE TABLE Todos (
      id INT PRIMARY KEY IDENTITY(1,1),
      task NVARCHAR(255) NOT NULL
    );
  `;
  
  try {
    const result = await sql.query(query);
    console.log("Table checked/created successfully.");
  } catch (err) {
    console.error("Error in createTableIfNotExists:", err);
    throw err;
  }
}

async function getAllTodos() {
  const query = 'SELECT * FROM Todos;';
  try {
    const result = await sql.query(query);
    return result.recordset;
  } catch (err) {
    console.error("Error fetching all todos:", err);
    throw err;
  }
}

async function getTodoById(id) {
  const query = 'SELECT * FROM Todos WHERE id = @id';
  try {
    const result = await sql.query(query, { id });
    return result.recordset[0]; // Assuming we're looking for a single todo
  } catch (err) {
    console.error("Error fetching todo by ID:", err);
    throw err;
  }
}

async function createTodo(task) {
  const query = 'INSERT INTO Todos (task) VALUES (@task)';
  try {
    await sql.query(query, { task });
    return { message: 'Todo created successfully!' };
  } catch (err) {
    console.error("Error creating todo:", err);
    throw err;
  }
}

async function updateTodo(id, task) {
  const query = 'UPDATE Todos SET task = @task WHERE id = @id';
  try {
    await sql.query(query, { id, task });
    return { message: 'Todo updated successfully!' };
  } catch (err) {
    console.error("Error updating todo:", err);
    throw err;
  }
}

async function deleteTodo(id) {
  const query = 'DELETE FROM Todos WHERE id = @id';
  try {
    await sql.query(query, { id });
    return { message: 'Todo deleted successfully!' };
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
