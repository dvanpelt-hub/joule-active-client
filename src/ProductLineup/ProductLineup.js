import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import kneeSleeve from "../images/productLineup.png";
import "./ProductLineup.css";

const ProductLineup = () => {
  return (
    <div className="product-container">
      <h2>OUR LINEUP</h2>
      <a href="https://www.amazon.com/s?me=A366LPOP2A82ZM&marketplaceID=ATVPDKIKX0DER">
        <LazyLoadImage
          src={kneeSleeve}
          alt="Athlete sitting down and wearing Joule knee sleeve product"
          id="kneeSleveImg"
        />
      </a>
    </div>
  );
};

export default ProductLineup;
