import { faFaceSmile, faPhotoVideo, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TopFeed.scss";

const StatusUpdate: React.FC = () => {
  return (
    <>
      <div className="top-feed">
        <div className="status-update">
          <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
          <input type="text" placeholder="What's on your mind?" />
        </div>
        <ul className="user-actions">
          <li><FontAwesomeIcon icon={faVideo} className="fa-icon fa-live-video" /> Live video</li>
          <li><FontAwesomeIcon icon={faPhotoVideo} className="fa-icon fa-photo-video" /> Photo/video</li>
          <li><FontAwesomeIcon icon={faFaceSmile} className="fa-icon fa-feeling" /> Feeling/activity</li>
        </ul>
      </div>
    </>
  );
};

export default StatusUpdate;