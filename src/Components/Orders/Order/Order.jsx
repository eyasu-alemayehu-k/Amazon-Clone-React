import "./Order.css";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import Formatter from "../../../Constants/formatter";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__time">{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <br />
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">
        Order Total: {Formatter.format(order.data.amount / 100)}
      </h3>
    </div>
  );
}

export default Order;
