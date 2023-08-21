import "./TextPreviewList.css";

import TextPreview from "./TextPreview";
import { Link } from "react-router-dom";

const TextPreviewList = (props) => {
  return (
    <ul className={"previews"}>
      {props.posts.map((post) => (
        <Link to={`/boards/script-boards/${post.id}`} key={post.id}>
          <TextPreview
            title={post.title}
            author={post.author}
            comments={post.comments}
            upvotes={post.upvotes}
            date={post.date}
          />
        </Link>
      ))}
    </ul>
  );
};

export default TextPreviewList;
