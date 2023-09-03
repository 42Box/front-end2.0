import "./CommentList.css";

import Comment from "./Comment";

import DateComponent from "../Util/DateComponent";
import { Box } from "@chakra-ui/react";

const CommentList = (props) => {
  return (
    <Box marginBottom="7px">
      {props.comments.map((comment) => (
        <Comment
          key={comment.commentId}
          img={comment.commentWriterProfileImagePath}
          author={comment.commentWriterNickname}
          date={<DateComponent date={comment.commentRegDate} />}
          content={comment.commentContent}
        />
      ))}
    </Box>
  );
};

export default CommentList;
