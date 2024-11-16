import React from 'react';

const Loading = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-[#AA163F] font-sans">
    <div className="w-16 h-16 border-4 border-gray-100 border-t-[#AA163F] border-solid rounded-full animate-spin"></div>
    <p className="mt-4 text-xl font-semibold">
      Loading...
    </p>
  </div>
);

export default Loading;
