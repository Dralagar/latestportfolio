// routes/blogPosts.js
const express = require('express');
const BlogPost = require('../models/BlogPost'); // Adjust path based on your directory structure

const router = express.Router();

// GET all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blog post
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  
  const blogPost = new BlogPost({
    title,
    content,
    author
  });
  
  try {
    const newBlogPost = await blogPost.save();
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
