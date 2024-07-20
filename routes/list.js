import { Router } from 'express';
import User from '../models/user.js';
import List from '../models/list.js';

const router = Router();

// Create a task
router.post('/addTask', async (req, res) => {
    try {
      const { title, body, email } = req.body;
      const existingUser = await User.findOne({ email: req.body.email });
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      const list = new List({ title, body, user: existingUser, done: false });
      await list.save();
      existingUser.list.push(list);
      await existingUser.save();
      res.status(200).json({ list });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
// Update a task
router.put('/updateTask/:id', async (req, res) => {
  try {
    const { title, body, done } = req.body;
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: 'Task not found' });
    }
    if (title) list.title = title;
    if (body) list.body = body;
    if (done !== undefined) list.done = done;
    await list.save();
    res.status(200).json({ message: 'Task Updated' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a task
router.delete('/deleteTask/:id', async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findOneAndUpdate(id, {
      $pull: { list: req.params.id },
    });
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Task Deleted' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get tasks for a user
router.get('/getTasks/:id', async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id }).sort({
      createdAt: -1,
    });
    if (list.length !== 0) {
      res.status(200).json({ list });
    } else {
      res.status(404).json({ message: 'No tasks found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
