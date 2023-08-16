import SerchDropDownContainer from "./SearchDropDownContainer";
import BoardNav from "./BoardNav";
import PostList from "./PostList";

const Board = (props) => {
  const postViewHandler = (key) => {
    props.onPostView(key);
  };

  return (
    <div>
      <BoardNav onWriteButton={props.onWriteButton} />
      <SerchDropDownContainer />
      <PostList PostList={props.posts} onPostView={postViewHandler} />
    </div>
  );
};

export default Board;
