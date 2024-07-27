const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// create a new task
router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

// update a task
router.patch("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete a task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
