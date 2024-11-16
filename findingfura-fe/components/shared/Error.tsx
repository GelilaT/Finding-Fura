'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-[#AA163F] font-sans text-center">
      <h2 className="text-3xl font-semibold mb-6">
        Oops! Something went wrong.
      </h2>
      <p className="text-lg mb-6">
        We couldn't load the content. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-[#AA163F] text-white rounded-lg font-medium hover:bg-[#8c0f2f] transition duration-200"
      >
        Try Again
      </button>
    </div>
  );
}
