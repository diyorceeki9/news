import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isMenuOpen }) => {
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <ul className="nav-list ">
        <li className="nav-item">
          <NavLink to="/" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500   duration-300'>Новости мира</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Travel" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Путешествие</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
