const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const { customerName, address, phone, paymentMethod, items, total } = req.body;
  try {
    const newOrder = new Order({
      customerName,
      address,
      phone,
      paymentMethod,
      items,
      total
    });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;