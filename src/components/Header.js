import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header(props) {
  const { logout, currentUser } = useAuth();

  return (
      <div >
        <nav className="navbar is-primary">
            <div className="navbar-item">
                <Link to="/" className="navbar-item">
                    <img src="https://storage.googleapis.com/dpss-wordpress-prod/2/2017/01/Safe-Exchange-Zone-Logo.png" className="logo" width="112" height="40"></img>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="navbar-item button is-warning">
                    <Link to="/logs">
                        <div>View all logs</div>
                    </Link>
                </div>
                <div className="navbar-item button is-danger">
                {currentUser ? (
                    <Link onClick={logout}>Logout</Link>
                ) : (
                    <Link to="login">Login</Link>
                )}
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Header;
