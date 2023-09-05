import { useContextRemove } from "../../StateProvider/StateProvider";
import "./CheckoutProduct.css";
import Button from "@mui/material/Button";
import Rating from "../../../Constants/rating.js";

function CheckoutProduct({
  index,
  id,
  title,
  image,
  price,
  rating,
  hideButton,
}) {
  const removeFromBasket = useContextRemove();
  return (
    <div className="checkoutProduct" key={id}>
      <img
        src={image}
        alt="amazon checkoutProduct"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p>{title}</p>
        <div className="checkoutProduct__paymentContainer">
          <p className="checkoutProduct__price">
            <strong>${price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            <span className="rating">{Rating(rating)}</span>
          </div>
        </div>

        {!hideButton && (
          <Button
            className="checkoutProduct__button"
            variant="contained"
            onClick={() => {
              removeFromBasket({ id, index });
            }}
          >
            Remove From Basket
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
