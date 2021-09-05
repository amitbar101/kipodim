import "./Admin.css";
import OrderCard from "./OrderCard";

function OrderCards(props) {
  const orders = props.orders;

  return (
    <div className="order-cards-gallery">
      {orders.map((order) => (
        <OrderCard
          id={order._id}  
          firstName={order.firstName}
          lastName={order.lastName}
          email={order.email}
          time={order.time}
          items={order.items}
          price={order.price}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default OrderCards;
