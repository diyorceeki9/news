// src/components/PopularArticles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PopularArticles() {
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    const fetchPopularArticles = async () => {
      try {
        const response = await axios.get('/popularNews.json');
        setPopularArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching popular articles:', error);
      }
    };

    fetchPopularArticles();
  }, []);

  return (
    <div className=" container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {popularArticles.map((article, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover transition duration-300 ease-in-out hover:opacity-75"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-700 text-base">{article.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link
              to={`/news/${article.id}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularArticles;
