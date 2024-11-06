import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CommentProps {
  onComment: () => void;
  comments: number;
}

const Comment: React.FC<CommentProps> = ({ onComment, comments }) => {
  return (
    <button className="comment-button" onClick={onComment}>
      <FontAwesomeIcon icon={faComment} /> Comment {comments}
    </button>
  );
};

export default Comment;