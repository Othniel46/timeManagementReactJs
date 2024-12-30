const http = require('http');
const express = require('express');
const cors = require('cors');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, GitPod!\n');
});

const app = express();
app.use(cors());
app.use(express.json());

let tasks = []; // Simulated database

// Fetch all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a task
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

// Delete a task
app.delete('/tasks/:name', (req, res) => {
  const taskName = req.params.name;
  tasks = tasks.filter(task => task.name !== taskName);
  res.status(204).send();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
