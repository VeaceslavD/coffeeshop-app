import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import { FavoriteProvider } from './contexts/favorite.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
    </CartProvider>
  </React.StrictMode>
);
