Overview:-
This is a simple Todo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The backend handles user authentication and task management,
including adding, updating, retrieving, and deleting tasks. Each task has a done field to indicate its completion status.

Features:-
-User Registration and Login
-Add, Update, Delete, and Retrieve Tasks
-Mark Tasks as Done/Not Done
-Secure Password Handling with bcrypt.js

Project structure:-
TODO/

├── conn/

│   └── conn.js

├── models/

│   ├── list.js

│   └── user.js

├── node_modules/

├── routes/

│   ├── auth.js

│   ├── list.js

│   └── app.js

├── package-lock.json

├── package.json

└── .env

Prerequisites:-
-Node.js (v12.x or later)
-npm (v6.x or later)
-MongoDB (running instance)

API Endpoints:-
User Authentication:

     Register a new user:-  POST  localhost:4000/api/v1/register
                            request body{
                                          "email": "user@example.com",
                                          
                                          "username": "username",
                                          
                                          "password": "password"
                                          
                                        }

     Login a user:-         POST localhost:4000/api/v1/signup
                            request body{
                                           "email": "user@example.com",
                                           
                                           "password": "password"
                                           
                                        }


Task Management:


      Add a task :          POST  localhost:4000/api/v2/addTask
      
                            request body{
                                          "title": "Task Title",
                                          
                                          "body": "Task Description",
                                          
                                          "email": "email"
                                        }

      Update a task:         PUT  localhost:4000/api/v2/updateTask/ :ID
                             request body{
                                          "title": "Task Title",
                                          "body": "Task Description",
                                          "done":"true",
                                          "email": "email"
                                        }
      Delete a task :        DELETE localhost:4000/api/v2/deleteTask/ :ID


      Get a Task :           GET  localhost:4000/api/v2/getTasks/ :ID
                             
     






