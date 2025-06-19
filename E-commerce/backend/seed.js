// https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSjmjOMHmy0OIPuGehLyx6gK5KVDRQ3DSbfUMdLKs_Hw9GaEZ_Pl7dDi2CLbEFPzXw6QXnVSWcmjmRPzu0N8zzhnjAckOwF95QqR3EIe6D5SiQ7MIv5sbuEQ
// https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_PVpQf2e_sqbGVsOWj7KLgtRVW2vbi0zrj7fSd4z6Hl8J0oBrlNcc_S7E3Q6QNLSqwJ3H2QogG1_kGBY4Xh8T3VcogXMHt8XPZ_xbF_g9vS50DtpvCYXQ
// https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_PVpQf2e_sqbGVsOWj7KLgtRVW2vbi0zrj7fSd4z6Hl8J0oBrlNcc_S7E3Q6QNLSqwJ3H2QogG1_kGBY4Xh8T3VcogXMHt8XPZ_xbF_g9vS50DtpvCYXQ
// https://www.nespresso.com/in/media/catalog/product/e/s/essenza-mini-black_1.png?optimize=high&fit=bounds&height=&width=&canvas=:


const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const Product = require('./models/Product');

    // Load environment variables
    dotenv.config();

    // Set strictQuery to suppress deprecation warning
    mongoose.set('strictQuery', false);

    // Connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => console.log('MongoDB connected for seeding'))
      .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
      });

    // Sample products
    const products = [
      {
        name: 'Samsung Galaxy A16 5G',
        price: 15000,
        category: 'Electronics',
        description: 'Latest model with 128GB storage',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSjmjOMHmy0OIPuGehLyx6gK5KVDRQ3DSbfUMdLKs_Hw9GaEZ_Pl7dDi2CLbEFPzXw6QXnVSWcmjmRPzu0N8zzhnjAckOwF95QqR3EIe6D5SiQ7MIv5sbuEQ',
        stock: 50
      },
      {
        name: 'boAt Airdopes 131 Bluetooth Headset',
        price: 699,
        category: 'Electronics',
        description: 'High-quality wireless earbuds with noise cancellation and 20-hour battery life.',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTz5odX69cx_vliFY52OxSwQsHUDcWyRFysXQgBL3XVM3UU3GvBWdAZpAgnTBfMRiLIUjlFUGN-bnMQZnP_dc2T_Db2p6NTm3Zpqvlx7Jc-uM6wXouJLCLe',
        stock: 50
      },
      {
        name: 'Fire-Boltt Dream Wristphone',
        price: 4000,
        category: 'Electronics',
        description: 'Fitness tracker with heart rate monitor, GPS, and 7-day battery life',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaCZqv3WGIoSK2hZAvr0FkYRGD5t3oIqFUuY9OJbuZSyUXzUMX3xJEplnLPbVAKXx8jWwiaTdtQCpwkt-oM-ttiiFc6dLCZFAnSQResjaS7UI45sOHNb8Mrg',
        stock: 50
      },
      {
        name: 'ASUS Vivobook Go AMD Ryzen 5 7520U',
        price: 33649,
        category: 'Electronics',
        description: '14-inch laptop with 8GB RAM, 512GB SSD, and Intel i5 processor',
        image: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/computer/c/r/7/-original-imagpxgqbu5hmwzs.jpeg',
        stock: 50
      },
      
      {
        name: 'T-Shirt',
        price: 500,
        category: 'Clothing',
        description: 'Comfortable cotton t-shirt',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_PVpQf2e_sqbGVsOWj7KLgtRVW2vbi0zrj7fSd4z6Hl8J0oBrlNcc_S7E3Q6QNLSqwJ3H2QogG1_kGBY4Xh8T3VcogXMHt8XPZ_xbF_g9vS50DtpvCYXQ',
        stock: 100
      },
      {
        name: 'Denim Jacket',
        price: 1290,
        category: 'Clothing',
        description: 'Stylish grey denim jacket with button closure, unisex fit',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxGncj9QiiFQWoijW82cUl6Dl2bY3xgSrB-Vx4ttzvUbFei-xazlGWy-GFy3BCdeYRzYHA3J6-N32Qs0tVY3PYlEEKbOF9NYJXnxF8EmEB-c6OSbDqqtK3FA',
        stock: 100
      },
      {
        name: 'Formal Shirt',
        price: 1000,
        category: 'Clothing',
        description: 'Slim-fit cotton shirt in white, ideal for office wear.',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQD6bbdVYJ_-ekq_kRJBR2tIymdjshzM10ouRVzFn04p2gpQhSjdEEpbvaFfZ1ahU3R4tAYFugaRptX5TNI85OZ2eOZWilEp7F15g4OQgjPE6n7h8t9PLJW',
        stock: 100
      },
      {
        name: 'Black Hoodie',
        price: 1500,
        category: 'Clothing',
        description: 'Cozy fleece hoodie with kangaroo pocket, available in black.',
        image: 'https://nobero.com/cdn/shop/files/black_94ef5b95-b2a3-447f-8234-6c85a43c046d.jpg?v=1734845956',
        stock: 100
      },
      {
        name: 'Wings of Fire',
        price: 300,
        category: 'Books',
        description: 'Bestselling novel',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSN5k0Wn4_bmUOZxYcPPY9avnh2rHrBSZN9mlZByoFhdch7INPdjg7esJMl_xFISyd4lS00tcC9m2goVhw_C24FFqmCFMHAHT1ZK7gY2qU',
        stock: 30
      },
      {
        name: 'Psychology of Money',
        price: 70,
        category: 'Books',
        description: 'Bestselling novel',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqUfx5iUAKvyTBrPgth63eD8BO-YKVuPDz_29qIXx_mE4SkZ8a_4QLUl-admSdQ7T7ApH8JsUc6pnDPerX54pwrXO-3VUeCq4GvJxtjF72',
        stock: 30
      },
      {
        name: 'A Short History of Nearly Everything',
        price: 363,
        category: 'Books',
        description: 'Bestselling novel',
        image: 'https://images.meesho.com/images/products/452879181/aznlq_1200.jpg',
        stock: 30
      },

      {
        name: 'Coffee Maker',
        price: 2500,
        category: 'Home & Kitchen',
        description: 'Automatic coffee maker',
        image: 'https://www.nespresso.com/in/media/catalog/product/e/s/essenza-mini-black_1.png?optimize=high&fit=bounds&height=&width=&canvas=:',
        stock: 20
      },
      {
        name: 'Philips 4.2 Litre Air Fryer NA120/00',
        price: 4000,
        category: 'Home & Kitchen',
        description: '4L air fryer with digital controls for healthy cooking.',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-VX8FpEOEUT8-ga7Jzfk2F2ue_oDTRbKI2N2pXzzIZDXRsSSsR09WLyxBhdRqeeJOUu_PyZRgIutmH4wXid9OsLwZBgDFK77UFlL-uuUzi1IrKakKAWYV5g',
        stock: 20
      },
      {
        name: 'Milton Insta Electric Kettle',
        price: 700,
        category: 'Home & Kitchen',
        description: '1.5L stainless steel kettle with auto shut-off.',
        image: 'https://m.media-amazon.com/images/I/61yL5Y7JVaS.jpg',
        stock: 20
      },
      {
        name: 'FLYNGO Touch Control LED Night Light Table Lamp',
        price: 395,
        category: 'Home & Kitchen',
        description: '1.5L stainless steel kettle with auto shut-off.',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtAv5_kK0XjbkYX1yuecmYu0E70NHQ_b9kVZi1GojckmHNjpvxradcz5hWhjlFc7cvTOu3SxFS0YtjrNrFURCZTrSWVhr4fTUX7dK1oA',
        stock: 20
      }
    ];

    // Function to seed products
    const seedProducts = async () => {
      try {
        // Clear existing products (optional, remove if you want to append)
        await Product.deleteMany({});
        // Insert new products
        await Product.insertMany(products);
        console.log('Products seeded successfully');
        mongoose.connection.close();
      } catch (err) {
        console.error('Error seeding products:', err);
        mongoose.connection.close();
      }
    };

    // Run the seeding function
    seedProducts();