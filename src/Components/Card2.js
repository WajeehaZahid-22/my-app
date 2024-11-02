import React from 'react';

const VideoCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Watch Our Introduction</h1>
      <p className="text-gray-600 mb-4">
        Check out the video below to learn more about our services and how we can help you.
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
          title="YouTube Video"
          className="rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
