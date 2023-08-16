import "./PostPreview.css";

import PostDate from "../../Util/PostDate";

const PostPreview = (props) => {
  const postViewHandler = () => {
    props.onPostView(props.key);
  };

  return (
    <div className="post-preview-container" onClick={postViewHandler}>
      <span className="post-preview-container__title"> {props.title} </span>
      <span className="post-preview-container__author">{props.author} </span>
      <span> 댓글: {props.commentCount} </span>
      <span> 추천: {props.recommendationCount} </span>
      <PostDate date={props.date} />
    </div>
  );
};

export default PostPreview;
