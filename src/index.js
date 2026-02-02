import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Đảm bảo nó đang gọi file App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);