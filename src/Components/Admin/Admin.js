import "./Admin.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import NavAdmin from "./NavAdmin";

// const allRoutes = [{ path: "/admin/orders", isExact: true, Component: Orders }];

function Admin() {
  return (
    <div className="Admin">
      <NavAdmin />
      
    </div>
  );
}

export default Admin;
