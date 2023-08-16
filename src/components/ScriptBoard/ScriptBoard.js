import SerchDropDownContainer from "./SearchDropDownContainer";
import ScriptBoardNav from "./ScriptBoardNav";
import ScriptPostList from "./ScriptPostList";

const ScriptBoard = (props) => {
  const postViewHandler = (key) => {
    props.onPostView(key);
  };

  return (
    <div>
      <ScriptBoardNav onWriteButton={props.onWriteButton} />
      <SerchDropDownContainer />
      <ScriptPostList
        ScriptPostList={props.posts}
        onPostView={postViewHandler}
      />
    </div>
  );
};

export default ScriptBoard;
