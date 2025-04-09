
import React from 'react';

const Videos = () => {
  return (
    <div>
      <h2 className="text-3xl mb-4">Video Archive</h2>
      <div className="space-y-6">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sample Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
