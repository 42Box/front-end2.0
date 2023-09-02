import MyCommentPreview from "./MyCommentPreview";
import { Link } from "react-router-dom";

const MyCommentList = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <Link to={`${props.to}/${comment.id}`} key={comment.id}>
          <MyCommentPreview
            title={comment.title}
            content={comment.content}
            boardType={comment.boardType}
            regDate={comment.regDate}
          />
        </Link>
      ))}
    </ul>
  );
};

export default MyCommentList;
