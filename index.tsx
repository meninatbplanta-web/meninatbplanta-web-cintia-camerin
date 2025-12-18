import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShortApp from './ShortApp';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Simple routing based on query parameter ?v=short
const isShortVersion = window.location.search.includes('v=short');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isShortVersion ? <ShortApp /> : <App />}
  </React.StrictMode>
);