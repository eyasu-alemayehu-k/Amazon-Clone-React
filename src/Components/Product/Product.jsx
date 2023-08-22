import React from "react";
import "./Product.css";
import Button from "@mui/material/Button";
import { useContextUpdate } from "../StateProvider/StateProvider";
import Rating from "../../Constants/rating.js";

function Product({ id, title, image, price, rating }) {
  const { addToBasket } = useContextUpdate();

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="amazon product" className="product__image" />
      <div className="product_detail">
        <p className="product__price">
          <strong>$ {price}</strong>
        </p>
        <div className="product__rating">
          <span className="rating">{Rating(rating)}</span>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          addToBasket({ id, title, image, price, rating });
        }}
      >
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
