// src/Components/Card.js
import React from 'react';
import './Cards.css';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn">Подробнее</a>
      </div>
    </div>
  );
};

export default Card;


