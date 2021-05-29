import { useState } from "react";
import { storage } from "../firebase";

function Show(props) {
  const uploadVideo = async (e) => {
    try {
      const file = e.target.files[0];
      const fileRef = storage.ref().child(file.name);
      await fileRef.put(file);
      console.log(await fileRef.getDownloadURL());
    } catch (error) {}
  };

  return (
    <div className="card">
      <div className="card-content hero is-link hero-body">
        <h1 className="title is-1">Hello log</h1>
      </div>
      <div className="card-footer">
        <div class="card-footer-item file button is-link">
          <label class="file-label">
            <input class="file-input" type="file" onChange={uploadVideo} />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Add A Video</span>
            </span>
          </label>
        </div>
        <span className="card-footer-item button is-danger">Delete Log</span>
      </div>
    </div>
  );
}

export default Show;
