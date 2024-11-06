import React from "react";
import "./Feed.scss";
import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";
import TopFeed from "./TopFeed/TopFeed";

const Feed: React.FC = () => {
  return (
    <section className="feed">
      <TopFeed />
      <Stories />
      <Posts />
    </section>
  );
};

export default Feed;