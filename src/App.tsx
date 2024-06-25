import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContext, CartContetType } from './CartContext';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Routes from './routes';
import './App.css'

function App() {
  const [cart, setCart] = useState<CartContetType['cart']>([]);

  return (
    <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <HeaderComponent />
          <Routes />
        </CartContext.Provider>
        <FooterComponent />
    
    </Router>
  );
}

export default App
