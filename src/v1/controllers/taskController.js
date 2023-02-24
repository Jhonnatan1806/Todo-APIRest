const taskModel = require('../models/taskModel')

exports.getAll = async (req, res) => {
  try {
    const tasks = await taskModel.getAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.get = async (req, res) => {
  try {
    const task = await taskModel.get(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.create = async (req, res) => {
  const { user_id, content, status } = req.body;
  try {
    const newTask = await taskModel.create(user_id, content, status);
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.update = async (req, res) => {
  const { user_id, content, status } = req.body;
  try {
    const updateTask = await taskModel.update(req.params.id, user_id, content, status);
    if (updateTask.modifiedCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.remove = async (req, res) => {
  try {
    const removeTask = await taskModel.remove(req.params.id);
    if (removeTask.deletedCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}