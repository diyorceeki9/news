/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './DesignSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const DesignSection = () => {
  const initialItems = [
    { imgSrc: '/kartinkiforsayt/2655230.1da274b0838f134366ec68acb819f476.jpg', likes: 22, category: 'Art & Design', title: '«Еще рот откроешь — и тебя здесь никогда больше не будет» — Глава «Сбербанка» Герман Греф устроил разборки с таксистами в аэропорту Горно-Алтайска (видео)',},
    { imgSrc: '/kartinkiforsayt/art-design-2.jpg', likes: 22, category: 'Art & Design', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio.', link: 'https://www.example2.com' },
    { imgSrc: '/kartinkiforsayt/art-design-3.jpg', likes: 22, category: 'Art & Design', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio.', link: 'https://www.example3.com' },
    { imgSrc: '/kartinkiforsayt/art-design-4.jpg', likes: 22, category: 'Art & Design', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio.', link: 'https://www.example4.com' },
    { imgSrc: '/kartinkiforsayt/art-design-5.jpg', likes: 22, category: 'Art & Design', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio.', link: 'https://www.example5.com' },
    { imgSrc: '/kartinkiforsayt/art-design-6.jpg', likes: 22, category: 'Art & Design', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio.', link: 'https://www.example6.com' }
  ];

  const [designItems, setDesignItems] = useState(initialItems);

  const handleLike = (index) => {
    const newDesignItems = [...designItems];
    newDesignItems[index].likes += 1;
    setDesignItems(newDesignItems);
  };

  return (
    <section className="design" id="design">
      <div className="container">
        <div className="title">
          <h2>Добро пожаловать на наш сайт!</h2>
          <p>Здесь вы можете найти множество полезной информации.
Пожалуйста, ознакомьтесь с нашими последними обновлениями и новостями.</p>
        </div>
        <div className="design-content">
          {designItems.map((item, index) => (
            <div className="design-iteam" key={index}>
              <a href={item.link}>
                <div className="design-img">
                  <img src={item.imgSrc} alt={`Art & Design ${index + 1}`} />
                  <span onClick={() => handleLike(index)}>
                    <i className="fas fa-heart"></i> {item.likes}
                  </span>
                  <span>{item.category}</span>
                </div>
              </a>
              <div className="design-title">
                <a href="#">{item.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
