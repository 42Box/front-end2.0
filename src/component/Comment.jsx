import "./Comment.css";

const Comment = (props) => {
  return (
    <div className="comment-card">
      <div className="comment-info">
        <span>{props.author}</span>
        <span>{props.date}</span>
      </div>
      <div className="comment-content">{props.content}</div>
    </div>
  );
};

export default Comment;
