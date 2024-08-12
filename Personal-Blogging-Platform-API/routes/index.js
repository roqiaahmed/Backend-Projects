const router = require('express').Router();

const {
  getPepole,
  getPersonByid,
  createPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/personControlle');
const {
  getUserPosts,
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');

router.get('/people', getPepole);
router.get('/people/:id', getPersonByid);
router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

router.get('/:userId/posts', getUserPosts);
router.post('/posts', createPost);
router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

router.get('/:postId/comments', getComments);
router.post('/:postId/comments', createComment);
router.get('/comments/:id', getComment);
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deleteComment);

module.exports = router;
