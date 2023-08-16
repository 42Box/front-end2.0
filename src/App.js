import React, { useState } from "react";

import Container from "./components/UI/Container";

import MainBoard from "./components/ScriptBoard/ScriptBoard";
import PostWrite from "./components/ScriptBoard/PostWrite/ScriptPostWrite";
import Post from "./components/ScriptBoard/Post/ScriptPost";

import DummyPosts from "./DummyPosts";

const ViewTypes = {
  SCRIPT_BOARD: "script-board",
  SCRIPT_WRITE: "script-write",
  SCRIPT_POST: "script-post",
};

const App = () => {
  const [viewType, setViewType] = useState(ViewTypes.SCRIPT_BOARD);

  const postWriteHandler = () => {
    if (viewType === ViewTypes.SCRIPT_BOARD) {
      setViewType(ViewTypes.SCRIPT_WRITE);
    } else {
      setViewType(ViewTypes.SCRIPT_BOARD);
    }
  };

  let postKey = "";
  const postViewHandler = (key) => {
    if (viewType === ViewTypes.SCRIPT_BOARD) {
      setViewType(ViewTypes.SCRIPT_POST);
      postKey = key;
    } else {
      setViewType(ViewTypes.SCRIPT_BOARD);
    }
  };

  let view;
  if (viewType === ViewTypes.SCRIPT_BOARD) {
    view = (
      <MainBoard
        posts={DummyPosts}
        onWriteButton={postWriteHandler}
        onPostView={postViewHandler}
      />
    );
  } else if (viewType === ViewTypes.SCRIPT_WRITE) {
    view = <PostWrite onCancleButton={postWriteHandler} />;
  } else if (viewType === ViewTypes.SCRIPT_POST) {
    view = <Post onCancleButton={postViewHandler} />;
  }

  return <Container>{view}</Container>;
};

export default App;
