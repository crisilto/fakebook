import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface LikeProps {
  onLike: () => void;
  likes: number;
}

const Like: React.FC<LikeProps> = ({ onLike, likes }) => {
  return (
    <button className="like-button" onClick={onLike}>
      <FontAwesomeIcon icon={faThumbsUp} /> Like {likes}
    </button>
  );
};

export default Like;