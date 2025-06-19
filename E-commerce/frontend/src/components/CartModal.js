import React, { useState } from 'react';

const CartModal = ({ cart, increaseQuantity, decreaseQuantity, placeOrder, closeCart }) => {
  const [customerDetails, setCustomerDetails] = useState({
    customerName: '',
    address: '',
    phone: '',
    paymentMethod: 'Cash on Delivery'
  });

  const handleInputChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!customerDetails.customerName || !customerDetails.address || !customerDetails.phone) {
      alert('Please fill in all customer details!');
      return;
    }
    placeOrder(customerDetails);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-modal">
      <h2>🛒 Your Cart</h2>
      <div id="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name} - ₹{item.price} x {item.quantity}</span>
            <div>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => decreaseQuantity(index)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ₹{total}</p>
      <h3>Enter Your Details</h3>
      <div className="customer-details">
        <label htmlFor="customerName">Name:</label>
        <input
          type="text"
          name="customerName"
          placeholder="Enter your name"
          value={customerDetails.customerName}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Address:</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={customerDetails.address}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={customerDetails.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="paymentMethod">Select Payment Method:</label>
        <select
          name="paymentMethod"
          value={customerDetails.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Credit/Debit Card">Credit/Debit Card</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Place Order</button>
      <button onClick={closeCart}>Close</button>
    </div>
  );
};

export default CartModal;