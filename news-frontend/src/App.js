import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import NewsCard from './components/NewsCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';

import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  const fetchNews = async (keyword = '', category = '', page = 1) => {
    try {
      const response = await axios.get('https://backend-app-news.vercel.app/news/api', {
        params: {
          keyword,
          category,
          page,
          language: 'en', // You can modify this if needed
        },
      });
      setArticles(response.data.articles);
      setTotalArticles(response.data.totalArticles);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(keyword, category, currentPage);
  }, [keyword, category, currentPage]);

  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-6 py-4">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter setCategory={setCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
        <Pagination page={currentPage} totalPages={totalPages} setPage={setCurrentPage} />
      </section>
    </div>
  );
};

export default App;
