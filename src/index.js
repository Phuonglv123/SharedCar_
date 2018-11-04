
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap + jquery 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js';
// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min';
// my css
import './index.scss';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)