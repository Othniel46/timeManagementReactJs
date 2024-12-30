const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const API_URL = 'http://localhost:5000/tasks';

// Load tasks from backend
const loadTasks = async () => {
  const response = await fetch(API_URL);
  const tasks = await response.json();
  taskList.innerHTML = '';
  tasks.forEach(task => displayTask(task));
};

// Save task to backend
form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const task = {
    name: document.getElementById('taskName').value,
    deadline: document.getElementById('taskDeadline').value,
    priority: document.getElementById('priority').value,
  };

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });

  displayTask(task);
  form.reset();
});

// Delete task from backend
const deleteTask = async taskName => {
  await fetch(`${API_URL}/${taskName}`, { method: 'DELETE' });
  loadTasks();
};

// Initialize tasks
loadTasks();

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/todos", require("./routes/todoRoutes"));
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'));