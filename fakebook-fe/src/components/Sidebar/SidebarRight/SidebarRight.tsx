import React from "react";
import "./SidebarRight.scss";
const SidebarRight: React.FC = () => {
  return (
    <aside className="sidebar-right">
      <div className="sidebar-right-birthdays">
        <p>Birthdays</p>
        <ul>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 1
          </li>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 1
          </li>
        </ul>
      </div>
      <div className="sidebar-right-contacts">
        <p>Contacts</p>
        <ul>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 1
          </li>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 2
          </li>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 3
          </li>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 4
          </li>
          <li>
            <img src="/profile-picture.svg" alt="profile picture" className="profile-picture" />
            Contact 5
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarRight;