// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Impact Blog API!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/impact-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Register a new user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'GenDralagar20', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Define BlogPost schema
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  upvotes: { type: Number, default: 0 },
});

// Create the BlogPost model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Route to fetch all blog posts
app.get('/api/blogPosts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new blog post
app.post('/api/blogPosts', async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newBlogPost = new BlogPost({ title, content, author });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update a blog post
app.put('/api/blogPosts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, { title, content, author }, { new: true });
    if (!updatedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(updatedBlogPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to delete a blog post
app.delete('/api/blogPosts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
