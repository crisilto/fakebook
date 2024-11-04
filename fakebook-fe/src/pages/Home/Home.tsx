import { faBars, faBell, faBookmark, faCalendarAlt, faChevronDown, faClock, faEnvelope, faGamepad, faHome, faNewspaper, faSearch, faStore, faUserFriends, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="top-left">
          <img src="/icon.svg" alt="fakebook" className="logo" />
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search Facebook" className="search-bar" />
        </div>
        <div className="top-center">
          <button
            onClick={() => navigate("/home")}
            className={location.pathname === "/home" ? "active" : ""}
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button
            onClick={() => navigate("/friends")}
            className={location.pathname === "/friends" ? "active" : ""}
            title="Friends"
          >
            <FontAwesomeIcon icon={faUserFriends} />
          </button>
          <button
            onClick={() => navigate("/reels")}
            className={location.pathname === "/reels" ? "active" : ""}
            title="Reels"
          >
            <FontAwesomeIcon icon={faVideo} />
          </button>
          <button
            onClick={() => navigate("/gaming")}
            className={location.pathname === "/gaming" ? "active" : ""}
            title="Gaming"
          >
            <FontAwesomeIcon icon={faGamepad} />
          </button>
        </div>
        <div className="top-right">
          <button onClick={() => navigate("/menu")} title="Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button onClick={() => navigate("/messages")} title="Messages">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button onClick={() => navigate("/notifications")} title="Notifications">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <div onClick={() => navigate("/profile")} title="Profile">
            <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
          </div>
        </div>
      </header>
      <main className="home-content">
        <aside className="sidebar-left">
          <div className="sidebar-left-list">
            <ul>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
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
        <section className="feed">
          <div className="top-feed">
            <div className="status-update">
              <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
              <input type="text" placeholder="What's on your mind?" />
            </div>
            <ul className="user-actions">
              <li>Live video</li>
              <li>Photo/video</li>
              <li>Feeling/activity</li>
            </ul>
          </div>
          <div className="bottom-feed">
            <div className="post">
              <p>This is a sample post.</p>
            </div>
            <div className="post">
              <p>This is a sample post.</p>
            </div>
          </div>
        </section>
        <aside className="sidebar-right">
          <div className="sidebar-right-birthdays">
            <p>Birthdays</p>
            <ul>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 1
              </li>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 1
              </li>
            </ul>
          </div>
          <div className="sidebar-right-contacts">
            <p>Contacts</p>
            <ul>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 1
              </li>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 2
              </li>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 3
              </li>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 4
              </li>
              <li>
                <img src="/public/profile-picture.svg" alt="profile picture" className="profile-picture" />
                Contact 5
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;