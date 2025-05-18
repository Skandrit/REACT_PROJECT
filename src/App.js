import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';
import MainPage, { products } from './pages/MainPage'; // Добавляем импорт products
import CartPage from './pages/CartPage';
import './index.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
        const productToAdd = products.find(p => p.id === productId);

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productId);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...productToAdd, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevCart.filter(item => item.id !== productId);
            }
        });
    };

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

     return (
            <Router>
                <div className="app-layout">
                    <Aside />
                    <div className="main-content-wrapper">
                        <Header cartCount={cartCount} />
                        <div className="main-content">
                            <Routes>
                                <Route path="/" element={<MainPage onAddToCart={addToCart} />} />
                                <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    export default App;