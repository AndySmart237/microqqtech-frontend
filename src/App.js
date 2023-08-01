import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/app.css'

import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import HomePage from "./Pages/Home/HomePage";
import BlogPage from "./Pages/Blog/BlogPage";
import ProductPage from "./Pages/Produit/ProductPage";
import ServicePage from './Pages/Service/ServicePage';
import AboutPage from './Pages/About/AboutPage';
import BlogDetailPage from "./Pages/Blog/BlogDetailPage";
import ProductDetailPage from "./Pages/Produit/ProductDetailPage";



function App() {
  const [theme, setTheme] = useState('theme-clair');

  const handleThemeChange = () => {
    setTheme(theme === 'theme-clair' ? 'theme-sombre' : 'theme-clair');    
    document.body.classList.toggle('theme-clair');
    document.body.classList.toggle('theme-sombre');
  };

  return (
    <>
      <header>
        <NavBar onThemeChange={handleThemeChange} theme={theme} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/produits" element={<ProductPage />} />
        <Route path="/produits/:slug" element={<ProductDetailPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <div className='pt-5 pb-0 mb-0'>
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;