import React from 'react';

function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <button
        disabled={page <= 1}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-lg text-gray-600">
        Page {page} of {totalPages}
      </span>
      <button
        disabled={page >= totalPages}
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;


