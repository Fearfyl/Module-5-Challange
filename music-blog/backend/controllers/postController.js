import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

export const getPost = async (req, res) => {
    const posts = await Post.findById(req.params.id);
    post ? res.json(posts) : res.status(404).json({ message: "Post not found" });
}

export const createPost = async (req, res) => {
    const { title, content, author, imageURL } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({ title,content,author,imageURL });
    res.status(201).json(await newPost.save());
    
}
