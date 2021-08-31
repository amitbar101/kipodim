import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="top-nav">
      <ul>
        <Link to="/">
          <li>ראשי</li>
        </Link>
        <Link to="collections">
          <li>קולקציות</li>
        </Link>
        <Link to="/clay">
          <li>כלי חימר</li>
        </Link>
        <Link to="/jewelry">
          <li>תכשיטים</li>
        </Link>
        <Link to="/custom-made-items">
          <li>פריטים בהזמנה אישית</li>
        </Link>
        <Link to="/workshops">
          <li>סדנאות</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
