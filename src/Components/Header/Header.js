import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import './Header.css';
const Header = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format('DD.MM.YYYY HH:mm:ss'));
  const [weather, setWeather] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const apiKeyWeather = '738b4968f119ed7820a98d375307db75'; // Замените на ваш API ключ
  const apiKeyExchangeRates = '9a5bfc91f505f96dd3d2fb57'; // Замените на ваш API ключ
  const city = 'Bishkek';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format('DD.MM.YYYY HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city, apiKeyWeather]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKeyExchangeRates}/latest/KGS`);
        setExchangeRates(response.data.conversion_rates);
      } catch (error) {
        console.error('Error fetching exchange rate data:', error);
      }
    };

    fetchExchangeRates();
  }, [apiKeyExchangeRates]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="title">News.kg <i className="fa-solid fa-newspaper px-3"></i></div>
        <div className="time">{currentTime}</div>
        {weather && (
          <div className="weather">
            <div>{weather.name}</div>
            <div>{weather.main.temp}°C</div>
            <div>{weather.weather[0].description}</div>
          </div>
        )}
        <div className="exchange-rates">
          {exchangeRates.USD && <div>USD/KGS: {exchangeRates.USD}</div>}
          {exchangeRates.EUR && <div>EUR/KGS: {exchangeRates.EUR}</div>}
          {exchangeRates.RUB && <div>RUB/KGS: {exchangeRates.RUB}</div>}
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <Navbar isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
