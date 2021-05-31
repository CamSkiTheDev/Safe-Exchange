import { useState } from "react";
import {Link} from "react-router-dom"

function Logs(props) {
  const logExchange = async () =>
    window.navigator.geolocation.getCurrentPosition(async (position) => {
      const {
        coords: { longitude, latitude },
        timestamp,
      } = position;

      try {
        await fetch(`/logs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: new Date(timestamp),
            geoposition: `${latitude} ${longitude}`,
            isActive: true,
            videos: [],
          }),
        }).then((res) => res.json());
      } catch (error) {}
    });

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

  return (
    <div className="container">
      <button className="button is-primary" onClick={logExchange}>
        Log Exchange +
      </button>

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
    </div>
  );
}

export default Logs;
