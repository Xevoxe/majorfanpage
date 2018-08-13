import React from 'react';
import ReactDom from 'react-dom';
import App from './Containers/App';
// import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './styles/styles.css';

window.$ = window.jQuery = require('jquery');

ReactDom.render(<App />, document.getElementById('root'));