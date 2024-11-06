import React from "react";
import "./Story.scss";

interface StoryProps {
  type?: string;
  index?: number;
}

const Story: React.FC<StoryProps> = ({ type, index }) => {
  if (type === "create") {
    return <div className="story create-story">Create story</div>;
  }

  return (
    <div className="story">
      <img src={`/profile-picture.svg`} alt={`Story ${index}`} className="story-image" />
      <img src={`/profile-picture.svg`} alt={`Profile ${index}`} className="story-profile" />
      <span>Friend {index}</span>
    </div>
  );
};

export default Story;