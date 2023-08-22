import React from "react";
import "./Subtotal.css";
import { useContextNew } from "../../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";
import Formatter from "../../../Constants/formatter";

// import CurrencyFormat from "react-currency-format";


function Subtotal({value}) {
    const {basket} = useContextNew();
  // console.log(basketItems)
  const navigate = useNavigate();

  
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{Formatter.format(value)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift 🎁
      </small>
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
