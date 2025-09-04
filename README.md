# 🛡️ Secure Task Manager

Secure Task Manager is a full-stack web application for managing personal or team tasks. It features user authentication, task CRUD operations, database integration, a modern responsive frontend, and is fully dockerized for easy deployment.

This project demonstrates practical usage of Node.js + Express, PostgreSQL, React, TailwindCSS, and JWT authentication.

## 🚀 Features

### 🔐 User Authentication

* Register / Login users

* Passwords hashed with bcrypt

* JWT-based authentication for secure API access

### ✅ Task Management

* Create, read, update, delete tasks

* Mark tasks as completed

* Each user sees only their own tasks

### 🗄️ Database Integration

* PostgreSQL database

* Sequelize ORM for models and queries

### 🎨 Frontend UI

* React single-page application

* TailwindCSS for styling

* Responsive, clean, and modern dashboard

* Protected routes using react-router-dom

### 🐳 Dockerized Development

* Backend, frontend, and PostgreSQL database run in separate containers

* Easy setup with a single docker compose up --build command

### 📡 REST API

* Backend exposes REST endpoints for tasks and user management

* JWT-protected routes to secure sensitive data

### 🛠️ Tech Stack
| Layer                 | Technology / Tool                            |
| --------------------- | -------------------------------------------- |
| Frontend              | React, TailwindCSS, Axios, React Router DOM  |
| Backend               | Node.js, Express, JWT, bcrypt, Sequelize ORM |
| Database              | PostgreSQL                                   |
| Containerization      | Docker, Docker Compose                       |
| Environment Variables | `.env` file for secrets and DB credentials   |
| Version Control       | Git / GitHub                                 |


### 📂 Project Structure
secure-task-manager/
├── backend/              # Node.js + Express backend
│   ├── src/
│   │   ├── models/       # Sequelize models: User.js, Task.js
│   │   ├── routes/       # API endpoints: auth, tasks
│   │   └── index.js      # Entry point
│   ├── package.json
│   └── Dockerfile
│
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # Navbar, ProtectedRoute, etc.
│   │   ├── pages/        # Login, Register, Dashboard
│   │   ├── api.js        # Axios API wrapper
│   │   └── App.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml    # Orchestrates backend, frontend, and DB
├── .env                  # Environment variables (backend)
└── README.md             # Project documentation


### ⚙️ Setup Instructions
<br>
1️⃣ Prerequisites

* Docker

* Docker Compose


2️⃣ Clone the Repository
```cmd
git clone https://github.com/YourUsername/secure-task-manager.git
cd secure-task-manager
```

3️⃣ Configure Environment Variables
Create a .env file in the backend/ folder:
```
PORT=5000
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=taskmanager
JWT_SECRET=supersecretkey
```
Make sure to replace supersecretkey with your own strong secret.

4️⃣ Start the Application
Build and start all containers:
```
docker compose up --build
```
This will launch:

* Backend → http://localhost:5000

* Frontend → http://localhost:3000

* PostgreSQL → Port 5432

### 🗄️ Database
* PostgreSQL database runs in its own container (taskmanager_db).

* Sequelize ORM handles database models:

User Model:

* id, username, password (hashed), createdAt, updatedAt

  Task Model:

* id, userId (foreign key), title, description, completed (boolean), createdAt, updatedAt

  Each task is associated with a user; tasks are private per user.


### 🔑 Authentication (JWT)
1. Users register with a username and password.

1. Passwords are hashed using bcrypt.

1. Users login to receive a JWT token.

1. Protected routes require a valid JWT in the Authorization header:

```
Authorization: Bearer <token>
```

🌐 API Endpoints

Auth:

* POST /api/auth/register → Register a new user

* POST /api/auth/login → Login and receive JWT

Tasks (JWT required):

* GET /api/tasks → Get all user tasks

* POST /api/tasks → Create a new task

* PUT /api/tasks/:id → Update a task

* DELETE /api/tasks/:id → Delete a task

### 🖥️ Frontend

* React app with TailwindCSS styling

* Axios handles HTTP requests to backend

* React Router protects private routes (Dashboard)

* Responsive UI works on desktop & mobile

* Example snippet (Navbar + Footer):
```
<footer className="text-center text-gray-500 text-sm py-4">
  &copy; 2025 Antonio. Secure Task Manager
</footer>
```
### 🐳 Docker Setup

Docker Compose services:
```
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: taskmanager
    volumes:
      - db-data:/var/lib/postgresql/data
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - db
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
volumes:
  db-data:
```

All services are isolated; restart with docker compose down && docker compose up --build.


# 💡 Screenshots
## Invalid credentials
<img width="1913" height="984" alt="image" src="https://github.com/user-attachments/assets/b7bbdb70-33cd-40a9-97bf-db34fcf2482d" />

## Register

<img width="1387" height="531" alt="image" src="https://github.com/user-attachments/assets/d825f835-8538-4bbe-97a9-4ee48a94f93c" />
## Login

<img width="1366" height="497" alt="image" src="https://github.com/user-attachments/assets/e3e53c1b-3b38-450a-8185-197b49e5e64d" />
## Logged in

<img width="1375" height="640" alt="image" src="https://github.com/user-attachments/assets/4edb9d2a-0df4-4d9d-bd19-41b808cf1d40" />
## Add task and finish it

<img width="1383" height="664" alt="image" src="https://github.com/user-attachments/assets/fd0a3ed7-299c-4deb-b2f0-a4f9fcd58dff" />
## Edit

<img width="1296" height="698" alt="image" src="https://github.com/user-attachments/assets/0fdbe211-2878-4ffe-a4ab-15e2d32c4884" />

### 📝 Notes

* All code is authored by AntonioPuceski — see license & footer in app.

* GitHub commit history timestamps prove ownership.

* Backend and frontend are separated for easy scaling.

* TailwindCSS version 3.4+ ensures a modern, responsive design.

### 📜 License
MIT License © 2025 AntonioPuceski
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

