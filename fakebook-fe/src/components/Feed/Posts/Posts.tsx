import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";

const Posts: React.FC = () => {
  return (
    <div className="bottom-feed">
      {[...Array(10)].map((_, index) => (
        <Post key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default Posts;