import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/app.css'

import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Home from "./Pages/Home/HomePage";
import Blog from "./Pages/Blog/BlogPage";
import Produits from "./Pages/Produit/ProductPage";
import Services from './Pages/Service/ServicePage';
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
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/produits/:slug" element={<ProductDetailPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <div className='pt-5 pb-0 mb-0'>
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;