import { Link } from "react-router-dom";
import "./Admin.css";

function NavAdmin() {
  return (
    <nav className="top-nav">
      <ul>
        <Link to="/admin/orders">
          <li>הזמנות</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavAdmin;
