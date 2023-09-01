import MyPagePostPreview from "./MyPagePostPreview";
import { Link } from "react-router-dom";

const MyPagePostList = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <Link to={`${props.to}/${post.boardId}`} key={post.boardId}>
          <MyPagePostPreview
            title={post.title}
            upvotes={post.likeCount}
            comments={post.commentCount}
            date={post.regDate}
          />
        </Link>
      ))}
    </ul>
  );
};

export default MyPagePostList;
