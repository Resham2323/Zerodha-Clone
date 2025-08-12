import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './LandingPage/Home/HomePage';
import SignupPage from './LandingPage/Signup/SignupPage';
import AboutPage from './LandingPage/About/AboutPage';
import PricingPage from './LandingPage/Pricing/PricingPage';
import  ProductPage from './LandingPage/Product/ProductPage';
import  SupportPage from './LandingPage/Support/SupportPage';
import Navbar from './LandingPage/Home/Navbar';
import Footer  from './LandingPage/Footer';
import './index.css';
import NotFound from './LandingPage/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
     <Footer />
  </BrowserRouter>
);
 

