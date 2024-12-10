import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure this import path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
