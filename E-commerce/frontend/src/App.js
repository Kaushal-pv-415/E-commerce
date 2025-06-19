import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import CartModal from './components/CartModal';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (name, price) => {
    setCart(prevCart => {
      const item = prevCart.find(i => i.name === name);
      if (item) {
        return prevCart.map(i =>
          i.name === name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { name, price, quantity: 1 }];
    });
  };

  const increaseQuantity = (index) => {
    setCart(prevCart =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (index) => {
    setCart(prevCart => {
      if (prevCart[index].quantity > 1) {
        return prevCart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((_, i) => i !== index);
    });
  };

  const placeOrder = (customerDetails) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    axios.post('http://localhost:5000/api/orders', {
      ...customerDetails,
      items: cart,
      total
    })
      .then(response => {
        alert('Order placed successfully!');
        setCart([]);
        setShowCart(false);
      })
      .catch(error => alert('Error placing order: ' + error.message));
  };

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

  return (
    <div className="App">
      <Header setShowCart={setShowCart} cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      {categories.map(category => (
        <ProductSection
          key={category}
          category={category}
          products={products.filter(p => p.category === category)}
          addToCart={addToCart}
        />
      ))}
      <Contact />
      {showCart && (
        <>
          <CartModal
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            placeOrder={placeOrder}
            closeCart={() => setShowCart(false)}
          />
          <div className="cart-overlay" onClick={() => setShowCart(false)}></div>
        </>
      )}
    </div>
  );
}

export default App;