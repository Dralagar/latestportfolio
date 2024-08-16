app.post('/api/blogs', async (req, res) => {
    try {
      const { title, subtitle, content, imageUrl } = req.body;
      const newPost = new BlogPost({ title, subtitle, content, imageUrl });
      await newPost.save();
      res.status(201).json({ message: 'Blog post created successfully', newPost });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog post' });
    }
  });
  