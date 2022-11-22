import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Information from './components/information';
import About from './components/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={Home()}/>
      <Route path="/about" element={About()}/>
    </Routes>
  );
}

export default App;
