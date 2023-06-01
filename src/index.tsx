import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThemedApp from './ThemedApp';
import axios from 'axios';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

root.render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>
);