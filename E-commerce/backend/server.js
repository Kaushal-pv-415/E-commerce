const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const dotenv = require('dotenv');

    // Load environment variables
    dotenv.config();

    // Debug: Log MONGO_URI to verify it's loaded
    console.log('MONGO_URI:', process.env.MONGO_URI ? process.env.MONGO_URI.trim() : 'undefined');
    console.log('PORT:', process.env.PORT);

    const app = express();
    app.use(cors());
    app.use(express.json());

    // Set strictQuery to suppress deprecation warning
    mongoose.set('strictQuery', false);

    // Connect to MongoDB
    const mongoUri = process.env.MONGO_URI ? process.env.MONGO_URI.trim() : null;
    if (!mongoUri) {
      console.error('Error: MONGO_URI is not defined in .env file');
      process.exit(1);
    }

    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => console.log('MongoDB connected'))
      .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
      });

    app.use('/api/products', require('./routes/products'));
    app.use('/api/orders', require('./routes/orders'));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));