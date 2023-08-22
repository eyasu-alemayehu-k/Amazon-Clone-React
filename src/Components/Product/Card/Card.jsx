import React from "react";
import "./Card.css";
import { useContextUpdate } from "../../StateProvider/StateProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "../../../Constants/rating.js";

function Card({ id, title, image, price, rating }) {
  const { addToBasket } = useContextUpdate();

  return (
    <div className="card">
      <div className="card-top">
        <img src={image} alt={title} />
        <div className="card__info">
          <h3>${price}</h3>
          <span className="rating">{Rating(rating)}</span>
        </div>
      </div>
      <div className="card-bottom">
        <h1>{title}</h1>
      </div>
      <button
        variant="contained"
        onClick={() => {
          addToBasket({ id, title, image, price, rating });
        }}
      >
        <AddShoppingCartIcon />
      </button>
    </div>
  );
}

export default Card;
