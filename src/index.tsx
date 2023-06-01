import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThemedApp from './ThemedApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>
);