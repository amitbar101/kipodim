import "./Admin.css";
import { closeOrder } from "../../api";

function OrderCard(props) {
  const dateAndTime = new Date(props.time);
  const date = dateAndTime.toLocaleDateString();
  const time = dateAndTime.toTimeString();
  const className = `order-card${
    props.status == "closed" ? " order-card-status-closed" : ""
  }`;


  const onCloseOrder = async () => {
    await closeOrder(props.id, "closed");
  };

  return (
    <div className={className}>
      <div>ID: {props.id}</div>
      <div>First Name: {props.firstName}</div>
      <div>Last Name: {props.lastName}</div>
      <div>Email: {props.email}</div>
      <div>Order date: {date}</div>
      <div>
        Order time: {`${dateAndTime.getHours()}:${dateAndTime.getMinutes()}`}
      </div>
      <div>Order items: {props.items}</div>
      <div>Order price: {props.price}</div>
      <div>Order status: {props.status}</div>
      <button onClick={onCloseOrder}>Close order</button>
    </div>
  );
}

export default OrderCard;
