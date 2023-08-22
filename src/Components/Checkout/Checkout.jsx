import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal/Subtotal";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useContextNew } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
function Checkout() {
  const {basket} = useContextNew();
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum = sum + basket[i].price;
  }
  let index = 0;
  return (
    <div className="checkout">
      <div className="checkout_container ">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="ads"
            className="checkout__ad"
          />
          <h3>Hello</h3>
          <h2 className="checkout__title">
            <ShoppingCartRoundedIcon style={{ color: "#916b0a" }} /> Your
            Shopping Basket
          </h2>
        </div>
        <div className="checkout__right">
          <Subtotal value={sum} />
        </div>
      </div>
      <div className="checkout__products">
        {basket.map((data) => (
            <CheckoutProduct
              index={index++}
              key={data.id}
              id={data.id}
              title={data.title}
              image={data.image}
              price={data.price}
              rating={data.rating}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Checkout;
