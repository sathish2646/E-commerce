import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Product from './components/Product';
import AddCart from './components/AddCart';
import { CartProvider } from './useContext/CartContext'; // ✅ Corrected import

import './App.css';

const App = () => {
  return (
    <BrowserRouter basename="/E-commerce">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/addtocart" element={<AddCart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
