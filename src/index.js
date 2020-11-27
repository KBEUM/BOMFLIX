import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import tmdbService from './service/tmdb_service';

const movieList = new tmdbService();

ReactDOM.render(
  <React.StrictMode>
    <App movieList={movieList}/>
  </React.StrictMode>,
  document.getElementById('root')
);