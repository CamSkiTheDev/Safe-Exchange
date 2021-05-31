import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Safe Exchange</p>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
      <footer className="card-footer">
        <Link to="/login" className="card-footer-item">
          Login
        </Link>
        <Link to="/signup" className="card-footer-item">
          Sign up
        </Link>
      </footer>
    </div>
  );
}

export default Landing;
