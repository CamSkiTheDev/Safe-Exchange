import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Logs from "../pages/Logs";
import Show from "../pages/Show";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Landing from "../pages/Landing"
import { useAuth } from "../context/AuthContext";

function Main(props) {
  const { currentUser, setLogs, logs } = useAuth();

  const URL = "https://safe-exchange-api.herokuapp.com/";

  const getLogs = async () => {
    const response = await fetch(`${URL}/logs/one/${props.match.params.id}`);
    const data = await response.json();
    setLogs(data)
  };

  const createLog = async (log) => {
    await fetch(URL , {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(log)
    });
    getLogs();
  }

  const deleteLogs = async (id) => {
    await fetch(URL + id, {
      method: "delete"
    });
    getLogs()
  }

  useEffect(() => getLogs(), []);

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
