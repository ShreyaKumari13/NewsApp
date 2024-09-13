import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-600 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;


