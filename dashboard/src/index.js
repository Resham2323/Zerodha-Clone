import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from './components/Login'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter  basename="/dashboard">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<Home />} />   
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
