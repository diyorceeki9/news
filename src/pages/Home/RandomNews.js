import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RandomNews() {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    const fetchRandomArticles = async () => {
      try {
        const response = await axios.get('/news.json');
        const articles = response.data.articles;
        const randomArticles = articles.sort(() => 0.5 - Math.random()).slice(0, 4); // Выбираем 4 случайных статьи
        setRandomArticles(randomArticles);
      } catch (error) {
        console.error('Error fetching random articles:', error);
      }
    };

    fetchRandomArticles();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {randomArticles.map((article, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover overflow-hidden bg-white bg-fixed transition duration-300 ease-in-out hover:opacity-40"
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

export default RandomNews;


