import "./TextPreviewList.css";

import TextPreview from "./TextPreview";
import { Link } from "react-router-dom";

const TextPreviewList = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <Link to={`${props.to}/${post.boardId}`} key={post.boardId}>
          <TextPreview
            profileImagePath={post.writerProfileImagePath}
            title={post.title}
            author={post.writerName}
            content={post.content}
            upvotes={post.likeCount}
            comments={post.commentCount}
            date={post.regDate}
          />
        </Link>
      ))}
    </ul>
  );
};

export default TextPreviewList;
