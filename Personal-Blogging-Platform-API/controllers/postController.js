const post = require('../models/post');
const index = require('../models/index');

const getUserPosts = async (req, res) => {
  const { userId } = req.params;
  try {
    const posts = await post.find({ publisher: userId });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await post.find();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createPost = async (req, res) => {
  const body = req.body;
  if (!body.title || !body.content || !body.publisher) {
    return res
      .status(400)
      .json({ msg: 'Please provide title, content and publisher value' });
  }
  const publisherShema = index('Person');
  const publisher = await publisherShema.findOne({ _id: body.publisher });

  if (!publisher) {
    return res.status(404).json({ msg: 'No publisher with this id' });
  }

  try {
    const newPost = await post.create(body);
    await publisherShema.findOneAndUpdate(publisher._id, {
      posts: [...publisher.posts, newPost._id],
    });
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const currPost = await post.findOne({ _id: id });
    if (!currPost) {
      return res.status(404).json({ msg: `No post with id : ${id}` });
    }
    res.status(200).json({ post: currPost });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    let post = await post.findOne({ _id: id });
    if (!post) {
      return res.status(404).json({ msg: `No post with id : ${id}` });
    }
    post = await post.findOneAndUpdate({ _id: id }, body, { new: true });
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const oldPost = await post.findOne({ _id: id });

    if (!oldPost) {
      return res.status(404).json({ msg: `No post with id : ${id}` });
    }
    const publisherShema = index('Person');
    const publisher = await publisherShema.findOne({ _id: oldPost.publisher });

    await oldPost.deleteOne({ _id: id });
    let publisherPosts = publisher.posts.filter(
      (postId) => postId.toString() !== id
    );
    await publisherShema.findOneAndUpdate(publisher._id, {
      posts: publisherPosts,
    });
    res.status(200).json({ msg: `Post with id : ${id} deleted` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getUserPosts,
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
