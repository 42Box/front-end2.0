import "./CommentList.css";

import Comment from "./Comment";

import Date from "./Util/Date";

const CommentList = (props) => {
  return (
    <div className="comment-list">
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          date={<Date date={comment.date} />}
          content={comment.content}
        />
      ))}
      <button>sdjklfjlsdkjfskl</button>
    </div>
  );
};

export default CommentList;
