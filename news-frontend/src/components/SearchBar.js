import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="relative flex items-center w-full max-w-md mx-auto pb-6">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search news..."
        className="w-full p-4 pl-10 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <button
        onClick={handleSearch}
        className=" flex items-center px-4 py-4 bg-blue-600 text-white rounded-lg mx-1 hover:bg-blue-700 transition duration-300 ease-in-out"
      >

        {/*   */}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
