import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div className="body">
      <div className="card">
        <div className="card-image">
          <figure class="image is-flex is-justify-content-center">
            <img src="https://i.imgur.com/X4jryUL.png" className="landing-logo" /> 
          </figure>
        </div>
        <div className="card-content is-primary">
          <div className="content">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
            Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Cras mattis consectetur purus sit amet fermentum.
          </div>
        </div>
        <footer className="card-footer buttons">
          <Link to="/login" className="card-footer-item button is-success">
            Login
          </Link>
          <Link to="/signup" className="card-footer-item button is-danger">
            Sign up
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
