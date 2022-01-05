import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from'./pages/Home/Home';
import axios from 'axios';
import Login from './pages/Login/Login';
axios.defaults.baseURL = ' https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(
  <React.StrictMode>
    {/* <h1>Hello Filmes</h1> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

 

