import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost , Login , SignUp } from '../controllers/posts.js';

const router = express.Router();

router.post('/' , Login)
router.post('/signup' , SignUp)
router.get('/profile/:email', getPosts);
router.post('/profile/:email', createPost);
router.get('/profile/:email/:id', getPost);
router.patch('/profile/:email/:id', updatePost);
router.delete('/profile/:email/:id', deletePost);
router.patch('/profile/:email/likePost', likePost);

export default router;