import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; // Assuming you have ProjectCard in the same directory

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // Adds the clicked product to the cart array
    console.log("Cart:", cart); // For testing purposes, log the cart contents
  };

  const products = [
    {
      brand: "Nike",
      images: ["image1.jpg"],
      category: "Shoes",
      rating: 4.5,
      price: 120,
      title: "Air Max 2021"
    },
    // Add more products here
  ];

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProjectCard key={index} obj={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Render the Cart */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
