import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header(props) {
  const { logout, currentUser } = useAuth();

  return (
      <div >
        <nav className="navbar is-primary">
            <Link to="/" className="navbar-item">
                <img src="https://storage.googleapis.com/dpss-wordpress-prod/2/2017/01/Safe-Exchange-Zone-Logo.png"></img>
            </Link>
            <Link to="/">
                <div>View all logs</div>
            </Link>
        {currentUser ? (
            <Link onClick={logout}>Logout</Link>
        ) : (
            <Link to="login">Login</Link>
        )}
        </nav>
    </div>
  );
}

export default Header;
