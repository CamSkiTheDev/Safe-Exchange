import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Logs from "../pages/Logs";
import Show from "../pages/Show";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Landing from "../pages/Landing"

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/logs" component={Logs} />
        <PrivateRoute path="/logs/:id" component={Show} />
        <Route path="/login" render={(rp) => <Login {...rp} />} />
        <Route path="/signup" render={(rp) => <Signup {...rp} />} />
      </Switch>
    </main>
  );
}

export default Main;
