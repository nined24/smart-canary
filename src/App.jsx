import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import About from './pages/About';
import Cart from './pages/Cart';
import Health from './pages/Health';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/health" element={<Health />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}
