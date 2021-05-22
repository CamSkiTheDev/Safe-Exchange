import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <Link to="/">
                <div>View all logs</div>
            </Link>
        </nav>
    );
}

export default Header