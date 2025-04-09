
import React from 'react';

const Photos = () => {
  return (
    <div>
      <h2 className="text-3xl mb-4">Photo Documentation</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
        <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default Photos;
