import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import chai from './chai';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <App />
      <chai />
    </>
  </React.StrictMode>
);
