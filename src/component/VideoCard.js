import React from 'react';

const VideoCard = ({ video,  }) => {
  return (
    <div className="video-card">
      <div className="card">
        <iframe
          title={video.heading}
          width='450'
          height="180"
          src={video.video}
          allowFullScreen
        ></iframe>
        <h2>Heading {video.heading}</h2>
        <div className="tags">
          
          {video.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
