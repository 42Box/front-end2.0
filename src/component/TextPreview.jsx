import "./TextPreview";

const TextPreview = ({ title, author, commentCount, upvotes, date }) => {
  return (
    <span className="post-preview">
      <span className="left">
        <span className="title">{title}</span>
        <span className="author">By {author}</span>
      </span>
      <span className="right">
        <span className="comment-count">{commentCount} Comments</span>
        <span className="upvotes">{upvotes} Upvotes</span>
        <span className="date">{date}</span>
      </span>
    </span>
  );
};
export default TextPreview;
