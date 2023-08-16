import SerchDropDownContainer from "./SearchDropDownContainer";
import MainNav from "./MainNav";
import PostList from "./PostList/PostList";

const MainBoard = (props) => {
  const postViewHandler = (key) => {
    props.onPostView(key);
  };

  return (
    <div>
      <MainNav onWriteButton={props.onWriteButton} />
      <SerchDropDownContainer />
      <PostList postList={props.posts} onPostView={postViewHandler} />
    </div>
  );
};

export default MainBoard;
