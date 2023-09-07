import "./CommentList.css";

import Comment from "./Comment";

import DateComponent from "../Util/DateComponent";

const CommentList = (props) => {
  return (
    <>
      {props.comments.map((comment) => (
        <Comment
          key={comment.commentId}
          img={comment.commentWriterProfileImagePath}
          author={comment.commentWriterNickname}
          date={<DateComponent date={comment.commentRegDate} />}
          content={comment.commentContent}
        />
      ))}
    </>
  );
};

export default CommentList;
