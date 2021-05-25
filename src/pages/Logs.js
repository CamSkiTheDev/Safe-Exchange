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

  return (
    <div className="container">
      <button className="button is-primary" onClick={logExchange}>
        Log Exchange +
      </button>
    </div>
  );
}

export default Logs;
