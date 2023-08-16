import "./PostList.css";

import PostPreview from "./PostPreview";

const PostList = (props) => {
  const postViewHandler = (key) => {
    props.onPostView(key);
  };

  return (
    <div>
      {props.postList.map((post) => (
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
