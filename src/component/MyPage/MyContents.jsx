import { useState } from "react";

import "./MyContents.css";

const MyContents = ({ userProfile }) => {
  const [showPosts, setShowPosts] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="my-contents">
      <div>
        <button onClick={() => setShowPosts(!showPosts)}>내가 작성한 글</button>
        {showPosts && (
          <ul>
            {userProfile.posts.map((post, index) => (
              <li key={index}>{post}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => setShowComments(!showComments)}>
        내가 작성한 댓글
      </button>
      {showComments && (
        <ul>
          {userProfile.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyContents;
