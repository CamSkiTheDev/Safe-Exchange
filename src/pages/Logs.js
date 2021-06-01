import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../App";
import { useAuth } from "../context/AuthContext";

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

  const fetchLogs = async () => {
    const response = await fetch(`${API_URL}/logs/${currentUser.uid}`);

    const data = await response.json();

    setLogs([...data]);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="container">
      <button className="button is-dark" onClick={logExchange}>
        Log Exchange +
      </button>
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
    </div>
  );
}

export default Logs;
