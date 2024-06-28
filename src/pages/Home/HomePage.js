import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PopularArticles from './PopularArticles';

function HomePage() {
  const [news, setNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/news.json');
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    const fetchPopularNews = async () => {
      try {
        const response = await axios.get('/popularNews.json');
        setPopularNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching popular news data:', error);
      }
    };

    fetchNews();
    fetchPopularNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="hero bg-gray-800 text-white p-8 rounded mb-8 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">Добро пожаловать на наш новостной портал</h1>
        <p className="text-lg mb-4 text-center">Будьте в курсе последних новостей со всего мира</p>
        <Link to="/about" className="text-blue-500 text-center hover:text-blue-700 font-semibold">
          Узнать больше
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4 w-full">Последние новости</h2>
      <div className=" w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg w-full">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-70 object-cover overflow-hidden bg-white bg-fixed transition duration-300 ease-in-out hover:opacity-40"
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

      <h2 className="text-3xl font-bold mt-8 mb-4 w-full">Популярные статьи</h2>
      <PopularArticles articles={popularNews} />
    </div>
  );
}

export default HomePage;
