import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../src/Components/Styles/Podcast.css"; 

const PodcastComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // logic to control the podcast player (e.g., play/pause functionality)
  };

  return (
    <Card className="podcast-card">
      <Card.Body>
        <Card.Title className="podcast-title">Welcome to Our Podcast</Card.Title>
        <Card.Text className="podcast-description">
          Discover insightful discussions on technology, innovation, and more.
        </Card.Text>

        {/* Example of embedding a podcast player */}
        <div className="podcast-player-container">
          <iframe
            title="Podcast Player"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
          ></iframe>
        </div>

        {/* Play/Pause Button */}
        <div className="text-center mt-4">
          <Button variant="primary" onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PodcastComponent;
