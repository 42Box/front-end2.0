import "./CommentList.css";

import Comment from "./Comment";

import DateComponent from "../Util/DateComponent";

const CommentList = (props) => {
  return (
    <div className="comment-list">
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          date={<DateComponent date={comment.date} />}
          content={comment.content}
        />
      ))}
    </div>
  );
};

export default CommentList;
