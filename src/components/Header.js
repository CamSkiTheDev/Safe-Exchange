import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <Link to="/">
                <div>View all logs</div>
            </Link>
            <Link to="/">
                <div>Login</div>
            </Link>
            <Link to="/">
                <div>Sign-up</div>
            </Link>
        </nav>
    );
}

export default Header