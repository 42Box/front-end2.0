import MyCommentPreview from "./MyCommentPreview";
import { Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";

const MyCommentList = (props) => {
  return (
    <UnorderedList alignSelf="center" paddingLeft={0} margin={0}>
      {props.comments.map((comment) => (
        <Link to={`${props.to}/${comment.id}`} key={comment.id}>
          <MyCommentPreview
            title={comment.title}
            content={comment.content}
            boardType={comment.boardType}
            regDate={comment.regDate}
          />
        </Link>
      ))}
    </UnorderedList>
  );
};

export default MyCommentList;
