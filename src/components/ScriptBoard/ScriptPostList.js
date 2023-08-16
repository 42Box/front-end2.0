import "./ScriptPostList.css";

import PostPreview from "../PostPreview/PostPreview";

const ScriptPostList = (props) => {
  const postViewHandler = (key) => {
    props.onPostView(key);
  };

  return (
    <div>
      {props.ScriptPostList.map((post) => (
        <PostPreview
          key={post.key}
          title={post.title}
          author={post.author}
          commentCount={post.commentCount}
          recommendationCount={post.recommendationCount}
          date={post.date}
          onPostView={postViewHandler}
        />
      ))}
    </div>
  );
};

export default ScriptPostList;
