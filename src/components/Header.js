import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header(props) {
  const { logout, currentUser } = useAuth();

  return (
    <nav>
      <Link to="/">
        <div>View all logs</div>
      </Link>
      {currentUser ? (
        <Link onClick={logout}>Logout</Link>
      ) : (
        <Link to="login">Login</Link>
      )}
    </nav>
  );
}

export default Header;
