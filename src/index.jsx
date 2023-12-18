import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { FavoriteProvider } from './contexts/FavoriteContext';
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
