*********** Steps to create and run the node app ***********
create an node app with package.json with below command
npm init -y

Install all the required dependencies

npm install express body-parser mssql dotenv

Create the folder structure

todo-app/
├── config/
│   └── db.js
├── controllers/
│   └── todoController.js
├── models/
│   └── todoModel.js
├── repositories/
│   └── todoRepository.js
├── services/
│   └── todoService.js
├── .env
├── index.js
└── package.json

Make the necessary changes related to the database configuration in .env file
Implement the code related related to API creation.

Run the Node Server by running the below command

node index.js

