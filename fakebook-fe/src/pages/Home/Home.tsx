import React from "react";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import SidebarLeft from "../../components/Sidebar/SidebarLeft/SidebarLeft";
import SidebarRight from "../../components/Sidebar/SidebarRight/SidebarRight";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </main>
    </div>
  );
};

export default Home;