// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="about-us-footer">
      <div className="container">
        <div className="for-footer">
          <a href="/">Главная</a>
          <a href="/about">О Нас</a>
          <a href="/contact">Контакты</a>
        </div>

        <div className="for-footer">
          <span><i className="fa fa-phone fa-xl "></i> +996704960800</span>
          <span><i className="fa fa-location-dot fa-xl "></i>Бишкек проспект Манас 66</span>
        </div>

        <div className="for-footer">
          <h3>Мы в социальных сетях</h3>
          <span><i className="fa-brands fa-instagram"></i></span>
          <span><i className="fa-brands fa-facebook"></i></span>
        </div>
        <p className='about-us-footer'>Copiright 2023 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;


