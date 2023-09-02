import "./TextPreviewList.css";

import TextPreview from "./TextPreview";
import { Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";

const TextPreviewList = (props) => {
  return (
    <UnorderedList alignSelf="center" paddingLeft={0} margin={0}>
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
    </UnorderedList>
  );
};

export default TextPreviewList;
