import "./CommentList.css";

import Comment from "./Comment";

import DateComponent from "../Util/DateComponent";

const CommentList = (props) => {
  return (
    <div className="comment-list">
      {props.comments.map((comment) => (
        <Comment
          key={comment.commentId}
          author={comment.commentWriterNickname}
          date={<DateComponent date={comment.commentRegDate} />}
          content={comment.commentContent}
        />
      ))}
    </div>
  );
};

export default CommentList;
