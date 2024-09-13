import React from 'react';

function CategoryFilter({ setCategory }) {
  return (
    <div className="flex justify-center mb-6">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full max-w-xs p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
      </select>
    </div>
  );
}

export default CategoryFilter;


