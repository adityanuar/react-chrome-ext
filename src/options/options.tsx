import React from 'react';
import ReactDOM from 'react-dom/client';
import './options.css';

const test = <img src='icon.png' />;
const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(test);