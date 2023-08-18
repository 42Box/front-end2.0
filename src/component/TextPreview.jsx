import "./TextPreview.css";

import Date from "./Util/Date";

const TextPreview = ({ title, author, comments, upvotes, date }) => {
  return (
    <div className="text-preview">
      <span className="text-preview__left">
        <span className="title"> Title: {title}</span>
        <span className="author"> By: {author}</span>
      </span>
      <span className="text-preview__right">
        <span className="comment-count"> {comments} Comments</span>
        <span className="upvotes"> {upvotes} Upvotes</span>
        <span className="date"> {<Date date={date} />}</span>
      </span>
    </div>
  );
};
export default TextPreview;
