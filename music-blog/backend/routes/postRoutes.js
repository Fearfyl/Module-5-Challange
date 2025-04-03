import express from 'express';
import { getAllPosts, getPost, createPost } from "../controllers/postController.js";

const router = express.Router();

router.get('/', getAllPosts); 
router.get('/:id', getPost); 
router.post('/', createPost);

export default router;