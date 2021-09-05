import "./Admin.css";
import { useEffect, useState } from "react";
import { getOrders } from "../../api";
import { getClosedOrders } from "../../api";
import OrderCards from "./OrderCards";
import { getOpenOrders } from "../../api";


let lastTimeOutFilterTextId = null;

function Orders(props) {
  const [orders, setOrders] = useState(null);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    clearTimeout(lastTimeOutFilterTextId);
    lastTimeOutFilterTextId = setTimeout(allOrders, 500);
  }, [filterText]);

  const allOrders = async () => {
    const x = await getOrders(filterText);
    setOrders(x);
  };

  const closedOrders = async () => {
    const x = await getClosedOrders();
    setOrders(x);
  };

  const OpenOrders = async () => {
    const x = await getOpenOrders();
    setOrders(x);
  };

  return (
    <div>
      <button onClick={() => allOrders()}>כל ההזמנות</button>
      <button onClick={() => closedOrders()}>הזמנות סגורות</button>
      <button onClick={() => OpenOrders()}>הזמנות פתוחות</button>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <br />
      {orders ? <OrderCards orders={orders} /> : ""}
    </div>
  );
}

export default Orders;
