import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './custom.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { IsMobileProvider } from './context/IsMobileContext';
import { LoadingProvider } from './context/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <IsMobileProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </IsMobileProvider>
  </Router>
);