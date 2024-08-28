//Bakery ProductItem Component is to represent the Bakery Items
import React from "react";
import products from "../assets/data/products";
import "../assets/css/starter.css";

const ProductItem = ({ bakeryName, bakeryImage, bakeryPrice }) => {
  return (
    <div className="bakerystore-container">
      <h2>{bakeryName}</h2>
      <img className="bakery-items" src={bakeryImage} alt="Bread"></img>
      <p>Price: {bakeryPrice}</p>
    </div>
  );
};

export default ProductItem;
