import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Banner from './Components/Banner/Banner'; // Correct path to the Banner component


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner
          text="FLAT 50% OFF"
          discount={50}
          hours={12}
          minutes={20}
        />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
