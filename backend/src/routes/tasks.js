const express = require("express");
const { createTask, getTasksByUser, updateTask, deleteTask } = require("../models/taskModel");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// Get all tasks
router.get("/", authenticateToken, async (req, res) => {
  try {
    const tasks = await getTasksByUser(req.user.id);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create task
router.post("/", authenticateToken, async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await createTask(req.user.id, title, description);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update task
router.put("/:id", authenticateToken, async (req, res) => {
  const { title, description, done } = req.body;
  try {
    const task = await updateTask(req.params.id, req.user.id, title, description, done);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete task
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const result = await deleteTask(req.params.id, req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
