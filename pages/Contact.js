
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl mb-4">Contact</h2>
      <form className="max-w-xl space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 dark:border-gray-600" />
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 dark:border-gray-600" />
        <textarea placeholder="Message" className="w-full p-2 border border-gray-300 dark:border-gray-600 h-32" />
        <button type="submit" className="w-full p-2 bg-black text-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
