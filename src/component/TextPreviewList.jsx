import "./TextPreviewList.css";

import TextPreview from "./TextPreview";

const TextPreviewList = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <TextPreview
          key={post.key}
          title={post.title}
          author={post.author}
          comments={post.comments}
          upvotes={post.upvotes}
          date={post.date}
        />
      ))}
    </ul>
  );
};

export default TextPreviewList;
