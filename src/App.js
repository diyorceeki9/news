// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Travel from './pages/Travel/Travel';
import PlaceDetail from './pages/Travel/PlaceDetail';
import ArticleDetail from './pages/Home/ArticleDetail';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<ArticleDetail />} />
        <Route path="/about" element={<About />} />
        <Route path='/Travel' element={<Travel/>}/>
        <Route path="/travel/:id" Component={PlaceDetail}/>
        <Route path="/contact" element={<Contact />}/>
        {/* <Route path="/image/:id" element={<ImageDetail />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
