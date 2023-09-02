import MyPagePostPreview from "./MyPagePostPreview";
import { Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";

const MyPagePostList = (props) => {
  return (
    <UnorderedList alignSelf="center" paddingLeft={0} margin={0}>
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
    </UnorderedList>
  );
};

export default MyPagePostList;
