# 📌 Development of a REST API for managing a To-Do List

A full-featured CRUD application with both frontend and backend built on a modern tech stack, allowing users to create, edit, view, and delete tasks.

---

## 🛠️ Technology Stack

- ⚛️ **React + Vite + TypeScript** 
- 🌐 **Express.js + SQLite**
- 💄 **Material UI**
- ⚙️ **REST API with data persistence in the database**

---

## 📦 Installation and Project Launch

> ⚠️ Make sure you have **Node.js ≥ 18** и **npm** installed.

### 1. Clone the repository:

```bash
git clone https://github.com/Alex3584/To-Do-List.git
cd To-Do-List
```

### 2. Install dependencies:

``` bash
npm install
cd todo-backend && npm install
cd ../todo-frontend && npm install
```

``` bash
cd todo-frontend
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install typeface-roboto
```

``` bash
cd todo-backend
npm install --save-dev typescript ts-node @types/node
npm install express cors sqlite3
npm install --save-dev @types/express @types/cors @types/sqlite3
```

### 3. Run the project:

Make sure you're in the root directory of the **To-Do-List** project.

```bash
# Launches both frontend and backend
npm run dev
```

Open the frontend: <http://localhost:5173>

The backend runs at: <http://localhost:3000>

---
