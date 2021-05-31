<<<<<<< HEAD
import { useState } from "react";
import {Link} from "react-router-dom"
=======
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../App";
import { useAuth } from "../context/AuthContext";
>>>>>>> dev

function Logs(props) {
  const { currentUser, setLogs, logs } = useAuth();
  const history = useHistory();

  const logExchange = async () =>
    window.navigator.geolocation.getCurrentPosition(async (position) => {
      const {
        coords: { longitude, latitude },
        timestamp,
      } = position;

      try {
        await fetch(`${API_URL}/logs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userid: currentUser.uid,
            date: new Date(timestamp),
            geoposition: `${latitude} ${longitude}`,
            isActive: true,
            videos: [],
          }),
        })
          .then((res) => res.json())
          .then((data) => setLogs([...logs, data]));
      } catch (error) {
        console.log(error);
      }
    });

<<<<<<< HEAD
    const loaded = () => {
      return props.logs.map((log) => (
        <div className="card">
        <div class="card-content hero is-link">
          <div class="content level-left">
            <h3>{log.uid.date}</h3>
          </div>
          <div class="content level-left">
            Log Time
          </div>
          <div class="content level-left">
            Geo-location
          </div>
         </div>
      </div>
      ));
    }
=======
  const fetchLogs = async () => {
    const response = await fetch(`${API_URL}/logs/${currentUser.uid}`);

    const data = await response.json();

    setLogs([...data]);
  };

  useEffect(() => {
    fetchLogs();
  }, []);
>>>>>>> dev

  return (
    <div className="container">
      <button className="button is-primary" onClick={logExchange}>
        Log Exchange +
      </button>
<<<<<<< HEAD

      {loaded()}

      <div className="card">
        <div class="card-content hero is-link">
          <div class="content level-left">
            Log Date
          </div>
          <div class="content level-left">
            Log Time
          </div>
          <div class="content level-left">
            Geo-location
          </div>
         </div>
      </div>
=======
      {console.log(logs)}
      {logs
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((log) => (
          <div
            className="box"
            key={log._id}
            onClick={() => history.push(`/logs/${log._id}`)}
          >
            <p>
              <b>Log Timestamp:</b> {new Date(log.createdAt).toLocaleString()}
            </p>
            <p>
              <b>Geoposition:</b> {log.geoposition}
            </p>
          </div>
        ))}
>>>>>>> dev
    </div>
  );
}

export default Logs;
