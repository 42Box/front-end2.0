import React, { useState } from "react";

import Container from "./components/UI/Container";

import Board from "./components/Board/Board";
import PostWrite from "./components/Board/PostWrite/PostWrite";
import Post from "./components/Board/Post/Post";

import DummyPosts from "./DummyPosts";

const ViewTypes = {
  _BOARD: "-board",
  _WRITE: "-write",
  _POST: "-post",
};

const App = () => {
  const [viewType, setViewType] = useState(ViewTypes._BOARD);

  const postWriteHandler = () => {
    if (viewType === ViewTypes._BOARD) {
      setViewType(ViewTypes._WRITE);
    } else {
      setViewType(ViewTypes._BOARD);
    }
  };

  let postKey = "";
  const postViewHandler = (key) => {
    if (viewType === ViewTypes._BOARD) {
      setViewType(ViewTypes._POST);
      postKey = key;
    } else {
      setViewType(ViewTypes._BOARD);
    }
  };

  let view;
  if (viewType === ViewTypes._BOARD) {
    view = (
      <Board
        posts={DummyPosts}
        onWriteButton={postWriteHandler}
        onPostView={postViewHandler}
      />
    );
  } else if (viewType === ViewTypes._WRITE) {
    view = <PostWrite onCancleButton={postWriteHandler} />;
  } else if (viewType === ViewTypes._POST) {
    view = (
      <Post
        title="Hello World!!!"
        author="jincpark"
        date={new Date("2023.8.21")}
        onCancleButton={postViewHandler}
      />
    );
  }

  return <Container>{view}</Container>;
};

export default App;
