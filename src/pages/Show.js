import { useState, useEffect } from "react";
import { API_URL } from "../App";
import { useAuth } from "../context/AuthContext";
import { storage } from "../firebase";

function Show({
  match: {
    params: { id },
  },
}) {
  const [log, setLog] = useState(null);
  const { currentUser, logs } = useAuth();

  const uploadVideo = async (e) => {
    try {
      const file = e.target.files[0];
      const fileRef = storage.ref().child(file.name);
      await fileRef.put(file);
      const URL = await fileRef.getDownloadURL();

      await fetch(`${API_URL}/videos/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ URL }),
      })
        .then((res) => res.json())
        .then((data) => setLog({ ...log, videos: [...log.videos, data] }));
    } catch (error) {}
  };

  const fetchLog = async () =>
    await fetch(`${API_URL}/logs/one/${id}`)
      .then((res) => res.json())
      .then((data) => setLog(data));

    // const removeLog = async () => 
    //     await fetch(`${API_URL}/logs/one/${id}`, {
    //         method: "PUT",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({...log, isActive: false
    //         });

  useEffect(() => {
    const log = logs.filter((log) => log._id === id)[0];

    console.log(log.videos);
    if (log) return setLog(log);

    fetchLog();
  }, [logs, id]);

  if (!log) return null;

  return (
    <div className="show-log">
        <h1 className="title is-1">Log Exchange</h1>
        <div className="card box">
        <div className="card-content">
            
            <p className="subtitle">
            <b>Log Timestamp: </b>
            {new Date(log.createdAt).toLocaleString()}
            </p>
            <p className="subtitle">
            <b>Geoposition: </b>
            {log.geoposition}
            </p>
            {log.videos.map((video) => (
            <video src={video.URL} key={video._id} controls />
            ))}
        </div>
        <div className="card-footer">
            <div className="card-footer-item file button is-link">
            <label className="file-label">
                <input className="file-input" type="file" onChange={uploadVideo} />
                <span className="file-cta">
                <span className="file-icon">
                    <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Add A Video</span>
                </span>
            </label>
            </div>
            <span className="card-footer-item button is-danger">Delete Log</span>
        </div>
        </div>
    </div>
  );
}

export default Show;
