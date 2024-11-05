import { faBars, faBell, faBookmark, faCalendarAlt, faChevronDown, faClock, faEnvelope, faFaceSmile, faGamepad, faHome, faNewspaper, faPhotoVideo, faSearch, faStore, faUserFriends, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const storyCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateArrows();
  }, []);

  const updateArrows = () => {
    if (storyCardRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = storyCardRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollStories = (direction: string) => {
    if (storyCardRef.current) {
      const scrollAmount = direction === 'right' ? 200 : -200;
      storyCardRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateArrows, 300);
    }
  };


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
              <li><FontAwesomeIcon icon={faVideo} className="fa-icon fa-live-video" /> Live video</li>
              <li><FontAwesomeIcon icon={faPhotoVideo} className="fa-icon fa-photo-video" /> Photo/video</li>
              <li><FontAwesomeIcon icon={faFaceSmile} className="fa-icon fa-feeling" /> Feeling/activity</li>
            </ul>
          </div>

          <div className="stories-feed">
            {canScrollLeft && (
              <button className="scroll-arrow left" onClick={() => scrollStories('left')}>{'<'}</button>
            )}
            <div className="story-card" ref={storyCardRef} onScroll={updateArrows}>
              <div className="story create-story">Create story</div>
              <div className="story">
                <img src="/path/to/image1.jpg" alt="Story 1" className="story-image" />
                <img src="/path/to/profile1.jpg" alt="Profile 1" className="story-profile" />
                <span>Friend 1</span>
              </div>
              <div className="story">
                <img src="/path/to/image2.jpg" alt="Story 2" className="story-image" />
                <img src="/path/to/profile2.jpg" alt="Profile 2" className="story-profile" />
                <span>Friend 2</span>
              </div>
              <div className="story">
                <img src="/path/to/image3.jpg" alt="Story 3" className="story-image" />
                <img src="/path/to/profile3.jpg" alt="Profile 3" className="story-profile" />
                <span>Friend 3</span>
              </div>
              <div className="story">
                <img src="/path/to/image4.jpg" alt="Story 4" className="story-image" />
                <img src="/path/to/profile4.jpg" alt="Profile 4" className="story-profile" />
                <span>Friend 4</span>
              </div>
              <div className="story">
                <img src="/path/to/image5.jpg" alt="Story 5" className="story-image" />
                <img src="/path/to/profile5.jpg" alt="Profile 5" className="story-profile" />
                <span>Friend 5</span>
              </div>
              <div className="story">
                <img src="/path/to/image6.jpg" alt="Story 6" className="story-image" />
                <img src="/path/to/profile6.jpg" alt="Profile 6" className="story-profile" />
                <span>Friend 6</span>
              </div>
              <div className="story">
                <img src="/path/to/image7.jpg" alt="Story 7" className="story-image" />
                <img src="/path/to/profile7.jpg" alt="Profile 7" className="story-profile" />
                <span>Friend 7</span>
              </div>
              <div className="story">
                <img src="/path/to/image8.jpg" alt="Story 8" className="story-image" />
                <img src="/path/to/profile8.jpg" alt="Profile 8" className="story-profile" />
                <span>Friend 8</span>
              </div>
              <div className="story">
                <img src="/path/to/image9.jpg" alt="Story 9" className="story-image" />
                <img src="/path/to/profile9.jpg" alt="Profile 9" className="story-profile" />
                <span>Friend 9</span>
              </div>
              <div className="story">
                <img src="/path/to/image10.jpg" alt="Story 10" className="story-image" />
                <img src="/path/to/profile10.jpg" alt="Profile 10" className="story-profile" />
                <span>Friend 10</span>
              </div>
              <div className="story">
                <img src="/path/to/image11.jpg" alt="Story 11" className="story-image" />
                <img src="/path/to/profile11.jpg" alt="Profile 11" className="story-profile" />
                <span>Friend 11</span>
              </div>
            </div>
            {canScrollRight && (
              <button className="scroll-arrow right" onClick={() => scrollStories('right')}>{'>'}</button>
            )}
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