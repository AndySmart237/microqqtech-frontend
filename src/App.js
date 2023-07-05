import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home/HomePage";
import Blog from "./Pages/Blog/BlogPage";
import Produits from "./Pages/Produit/ProductPage";
import BlogDetailPage from "./Pages/Blog/BlogDetailPage";
import ProductDetailPage from "./Pages/Produit/ProductDetailPage";



function App() {
  const [theme, setTheme] = useState('theme-clair');

  const handleThemeChange = () => {
    setTheme(theme === 'theme-clair' ? 'theme-sombre' : 'theme-clair');    
    document.body.classList.toggle('theme-sombre');
  };

  return (
    <div>
      <header>
        <NavBar onThemeChange={handleThemeChange} theme={theme} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/produits/:slug" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;