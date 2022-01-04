import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from'./pages/Home/Home'
import axios from 'axios';

axios.defaults.baseURL = ' https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(
  <React.StrictMode>
    {/* <h1>Hello Filmes</h1> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

 

