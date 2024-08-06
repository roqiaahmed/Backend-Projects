const comment = require('../models/comment');

const getComments = async (req, res) => {
  try {
    const comments = await comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComment = async (req, res) => {
  const { id } = req.params;
  try {
    const currComment = await comment.findById(id);
    if (currComment) {
      res.json(currComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  const newComment = new comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedComment = await comment.findByIdAndUpdate(id, req.body);
    if (updatedComment) {
      res.json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await comment.findByIdAndDelete(id);
    if (deletedComment) {
      res.json(deletedComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
