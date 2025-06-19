import React from 'react';

const ProductSection = ({ category, products, addToCart }) => {
  return (
    <section id={category.toLowerCase().replace(' & ', '-')} className="product-section">
      <h2>{category}</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product.name, product.price)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;