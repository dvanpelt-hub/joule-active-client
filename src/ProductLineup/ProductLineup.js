import React from "react";
import kneeSleeve from "../images/productLineup.jpeg";
import "./ProductLineup.css";

const ProductLineup = () => {
  return (
    <div className="product-container">
      <h2>VIEW OUR PRODUCTS</h2>
      <a href="https://www.amazon.com/s?me=A366LPOP2A82ZM&marketplaceID=ATVPDKIKX0DER">
        <img
          src={kneeSleeve}
          alt="Athlete sitting down and wearing Joule knee sleeve product"
        />
      </a>
    </div>
  );
};

export default ProductLineup;
