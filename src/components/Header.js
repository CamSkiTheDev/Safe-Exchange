import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header(props) {
  const { logout, currentUser } = useAuth();

  if (window.location.pathname === '/') return null;

  return (
      <div>
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="is-flex is-justify-content-center">
                    <Link to="/logs">
                        <img src="https://i.imgur.com/X4jryUL.png" className="logo"></img>
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item button login-btn">
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
