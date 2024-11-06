import { faEllipsisH, faPaperPlane, faShare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Comment from "../Comment/Comment";
import Like from "../Like/Like";

interface PostProps {
    index: number;
}

const Post: React.FC<PostProps> = ({ index }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setComments(comments + 1);
    };

    const handleHidePost = () => {
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-left">
                    <img src={`/profile-picture.svg`} alt={`Profile ${index}`} className="profile-pic" />
                    <div className="post-header-info">
                        <p>Username {index}</p>
                        <span>2 hours ago</span>
                    </div>
                </div>
                <div className="post-header-right">
                    <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-icon" />
                    <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleHidePost} />
                </div>
            </div>
            <div className="post-content">
                <p>This is the content of post {index}.</p>
                <img src={`/story-picture.svg`} alt={`Post ${index}`} />
            </div>
            <div className="post-actions">
                <Like onLike={handleLike} likes={likes} />
                <Comment onComment={handleComment} comments={comments} />
                <button className="send-button"><FontAwesomeIcon icon={faPaperPlane} /> Send</button>
                <button className="share-button"><FontAwesomeIcon icon={faShare} /> Share</button>
            </div>
        </div>
    );
};

export default Post;