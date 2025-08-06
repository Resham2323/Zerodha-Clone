import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './LandingPage/Home/HomePage';
import Signup from './LandingPage/Signup/Signup';
import AboutPage from './LandingPage/About/AboutPage';
import Pricing from './LandingPage/Pricing/Pricing';
import  Product from './LandingPage/Product/Product';
import  Support from './LandingPage/Support/Support'
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Support' element={<Support/>}/>
      <Route path='/Product' element={<Product/>}/>
    </Routes>
  </BrowserRouter>
);


