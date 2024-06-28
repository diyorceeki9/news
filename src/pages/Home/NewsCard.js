// src/components/NewsCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ article, isMain }) {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${isMain ? 'col-span-2' : ''}`}>
      <img
        src={article.imageUrl}
        alt={article.title}
        className={`w-full ${isMain ? 'h-96' : 'h-64'} object-cover overflow-hidden bg-white bg-fixed transition duration-300 ease-in-out hover:opacity-40`}
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
  );
}

export default NewsCard;

