class Todo {
  constructor(id, title, description, status, createdAt) {
    this.id = id; 
    this.title = title; 
    this.description = description; 
    this.status = status; 
    this.createdAt = createdAt; 
  }

  static generateTableSQL() {
    return `
      CREATE TABLE Todos (
        id INT IDENTITY(1,1) PRIMARY KEY,
        title NVARCHAR(255) NOT NULL,
        description NVARCHAR(MAX) NOT NULL,
        status BIT DEFAULT 0,
        created_at DATETIME DEFAULT GETDATE()
      );
    `;
  }
}

module.exports = Todo;
