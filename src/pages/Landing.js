import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div className="body">
      <div className="card is-flex-direction-column is-fullheight-100vh">
        <div className="card-image">
          <figure class="image is-flex is-justify-content-center">
            <img src="https://i.imgur.com/X4jryUL.png" className="landing-logo" /> 
          </figure>
        </div>
        <div className="card-content is-primary landing" >
          <div className="content is-fullheight-100vh">
            <h2>The app designed to make co-parenting easier.</h2>
          </div>
        </div>
        <div className="card-footer buttons landing">
          <Link to="/login" className="card-footer-item button is-success">
            Login
          </Link>
          <Link to="/signup" className="card-footer-item button is-danger">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
