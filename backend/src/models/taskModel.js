const pool = require("../db");

async function createTask(userId, title, description) {
  const result = await pool.query(
    "INSERT INTO tasks (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
    [userId, title, description]
  );
  return result.rows[0];
}

async function getTasksByUser(userId) {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC",
    [userId]
  );
  return result.rows;
}

async function updateTask(taskId, userId, title, description, done) {
  const result = await pool.query(
    `UPDATE tasks SET title=$1, description=$2, done=$3 
     WHERE id=$4 AND user_id=$5 RETURNING *`,
    [title, description, done, taskId, userId]
  );
  return result.rows[0];
}

async function deleteTask(taskId, userId) {
  await pool.query("DELETE FROM tasks WHERE id=$1 AND user_id=$2", [
    taskId,
    userId,
  ]);
  return { message: "Task deleted" };
}

module.exports = {
  createTask,
  getTasksByUser,
  updateTask,
  deleteTask,
};


// Created by Antonio — https://github.com/Ton4ee