// src/Components/NewsWorld/NewsWorld.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsWorld.css';

const NewsWorld = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'b8e816e9923b4dde968a63aeb411dac9'; // Замените на ваш API ключ
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container">
      <h2>Latest News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index} className="news-article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsWorld;
