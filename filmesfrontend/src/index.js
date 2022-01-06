import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from'./pages/Home/Home';
import axios from 'axios';
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Login from './pages/Login/Login'; 
import Filme from './pages/Filme/Filme';
axios.defaults.baseURL = ' https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme" element={<Filme />} />
      </Routes>
    </BrowserRouter>
    <Filme />
  </React.StrictMode>,
  document.getElementById('root')
);

 

