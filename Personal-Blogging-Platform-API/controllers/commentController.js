const comment = require('../models/comment');
const index = require('../models/index');

const getComments = async (req, res) => {
  const { postId } = req.params;
  const postIndex = index('post');
  const currPost = await postIndex.findById(postId);

  if (!currPost) {
    return res.status(404).json({ message: 'Post not found' });
  }

  try {
    const comments = await comment.find({ post: postId });
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
  const { postId } = req.params;
  const newComment = new comment(req.body);
  newComment.post = postId;
  try {
    const savedComment = await newComment.save();
    const postIndex = index('post');
    await postIndex.findOneAndUpdate(
      { _id: postId },
      {
        $push: { comments: savedComment._id },
      }
    );
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
  const currComment = await comment.findById(id);
  const postSchema = index('post');
  const postId = currComment.post;
  try {
    const deletedComment = await comment.findByIdAndDelete(id);
    await postSchema.findByIdAndUpdate(postId, {
      $pull: { comments: id },
    });
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
