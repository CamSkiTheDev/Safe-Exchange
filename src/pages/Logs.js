import { API_URL } from "../App";
import { useAuth } from "../context/AuthContext";
function Logs(props) {
  const { currentUser, setLogs, logs } = useAuth();

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
          .then((data) => setLogs([...logs, ...data]));
      } catch (error) {}
    });

  return (
    <div className="container">
      <button className="button is-primary" onClick={logExchange}>
        Log Exchange +
      </button>
    </div>
  );
}

export default Logs;
