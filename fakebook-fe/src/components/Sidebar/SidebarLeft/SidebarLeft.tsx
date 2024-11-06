import { faBookmark, faCalendarAlt, faChevronDown, faClock, faGamepad, faNewspaper, faStore, faUserFriends, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SidebarLeft.scss";
const SidebarLeft: React.FC = () => {
  return (
    <aside className="sidebar-left">
      <div className="sidebar-left-list">
        <ul>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            User-name
          </li>
          <li>
            <FontAwesomeIcon icon={faUserFriends} className="fa-icon" /> Friends
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} className="fa-icon" /> Memories
          </li>
          <li>
            <FontAwesomeIcon icon={faBookmark} className="fa-icon" /> Saved
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} className="fa-icon" /> Groups
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} className="fa-icon" /> Video
          </li>
          <li>
            <FontAwesomeIcon icon={faStore} className="fa-icon" /> Marketplace
          </li>
          <li>
            <FontAwesomeIcon icon={faNewspaper} className="fa-icon" /> Feeds
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} className="fa-icon" /> Events
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronDown} className="fa-icon" /> See more
          </li>
        </ul>
      </div>
      <div className="sidebar-left-shortcuts">
        <p>Your shortcuts</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGamepad} className="fa-icon" /> Candy Crush Saga
          </li>
          <li>
            <FontAwesomeIcon icon={faGamepad} className="fa-icon" /> Texas HoldEm Poker
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarLeft;