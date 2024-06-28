import React from 'react';
import { useParams } from 'react-router-dom';

const news = [
    { id: 1, title: 'Новость 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', content: 'Полное содержание новости 1' },
    { id: 2, title: 'Новость 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', content: 'Полное содержание новости 2' },
    // Добавьте больше новостей по необходимости
];

function NewsDetail() {
    const { id } = useParams();
    const newsItem = news.find(item => item.id === parseInt(id, 10));

    if (!newsItem) {
        return <div>Новость не найдена</div>;
    }

    return (
        <div>
            <h1>{newsItem.title}</h1>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image-detail" />
            <p>{newsItem.content}</p>
        </div>
    );
}

export default NewsDetail;

