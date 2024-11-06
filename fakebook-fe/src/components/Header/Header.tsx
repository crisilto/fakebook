import { faBars, faBell, faEnvelope, faGamepad, faHome, faSearch, faUserFriends, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="home-header">
      <div className="top-left">
        <img src="/icon.svg" alt="fakebook" className="logo" />
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search Facebook" className="search-bar" />
      </div>
      <div className="top-center">
        <button
          onClick={() => navigate("/home")}
          className={`home-button ${location.pathname === "/home" ? "active" : ""}`}
          title="Home"
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button
          onClick={() => navigate("/friends")}
          className={`home-button ${location.pathname === "/friends" ? "active" : ""}`}
          title="Friends"
        >
          <FontAwesomeIcon icon={faUserFriends} />
        </button>
        <button
          onClick={() => navigate("/reels")}
          className={`home-button ${location.pathname === "/reels" ? "active" : ""}`}
          title="Reels"
        >
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button
          onClick={() => navigate("/gaming")}
          className={`home-button ${location.pathname === "/gaming" ? "active" : ""}`}
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
          <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;