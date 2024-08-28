//Bakery ProductList Component is to represent the List of Bakery Items.
import React from "react";
import "../assets/css/starter.css";
import product from "../assets/data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const displayBakery = product.map((products) => {
    return (
      <ProductItem
        bakeryName={products.name}
        bakeryImage={products.image}
        bakeryPrice={products.price}
      />
    );
  });
  return <div className="bakery-section">{displayBakery}</div>;
};

export default ProductList;

// <div className="bakerystore-container">
//   <h2>{products.name}</h2>
//   <img className="bakery-items" src={products.image} alt="Bread"></img>
//   <p>{products.price}</p>
// </div>
