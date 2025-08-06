import React from 'react';

const Spinner = () => (
  <div className="mt-4 text-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent animate-spin rounded-full mx-auto"></div>
    <p className="text-sm mt-2 text-gray-500">Merging PDFs...</p>
  </div>
);

export default Spinner;
