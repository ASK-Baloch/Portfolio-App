// components/DownloadButton.js

import React from 'react';

const DownloadButton = () => {
  return (
    <div className="bg-blue-500 text-black rounded-lg p-4 mt-5">
    <a href="/resume.pdf" download>
      <button className="bg-white text-black rounded-lg py-2 px-4 font-semibold hover:bg-gray-100">
        Download Resume
      </button>
    </a>
  </div>
  );
};
export default DownloadButton;
