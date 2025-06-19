import React from 'react';

const Header = ({ setShowCart, cartCount }) => {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

  return (
    <header>
      <h1>ShopEasy - Your Online Store</h1>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <a href={`#${category.toLowerCase().replace(' & ', '-')}`}>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={() => setShowCart(true)}>View Cart ({cartCount})</button>
    </header>
  );
};

export default Header;