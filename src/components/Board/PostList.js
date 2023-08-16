import "./PostList.css";

import PostPreview from "../PostPreview/PostPreview";

const PostList = (props) => {
  const postViewHandler = (key) => {
    props.onPostView(key);
  };

  return (
    <div>
      {props.PostList.map((post) => (
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

export default PostList;
