import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles/Bloglist.css';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setBlogPosts(response.data);
      } catch (error) {
        setError('Error fetching blog posts');
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Blog</h1>
      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      {blogPosts.length > 0 ? (
        blogPosts.map(post => (
          <div key={post._id} className="blog-post">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-content">{post.content}</p>
            <small className="blog-post-meta">By {post.author} on {new Date(post.date).toLocaleDateString()}</small>
          </div>
        ))
      ) : (
        !loading && <p className="no-posts">No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogList;
