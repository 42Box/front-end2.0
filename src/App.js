import React, { useState } from "react";

import Container from "./components/UI/Container";
import MainBoard from "./components/MainBoard/MainBoard";
import PostWrite from "./components/PostWrite/PostWrite";
import Post from "./components/MainBoard/PostList/Post/Post";

const DummyPosts = [
  {
    key: Math.random().toString(),
    title: "title1",
    author: "user1",
    commentCount: 10,
    recommendationCount: 42,
    date: new Date(2023, 8, 15),
  },
  {
    key: Math.random().toString(),
    title: "title2",
    author: "user2",
    commentCount: 8,
    recommendationCount: 0,
    date: new Date(2023, 8, 15),
  },
  {
    key: Math.random().toString(),
    title: "title3",
    author: "user3",
    commentCount: 12,
    recommendationCount: 231,
    date: new Date(2023, 7, 22),
  },
  {
    key: Math.random().toString(),
    title: "title4",
    author: "user4",
    commentCount: 2832,
    recommendationCount: 21,
    date: new Date(2023, 1, 15),
  },
];

const App = () => {
  const [viewSelector, setViewSelector] = useState("main");

  const postWriteHandler = () => {
    if (viewSelector === "main") {
      setViewSelector("write");
    } else {
      setViewSelector("main");
    }
  };

  let postKey = "";
  const postViewHandler = (key) => {
    if (viewSelector === "main") {
      setViewSelector("post");
      postKey = key;
    } else {
      setViewSelector("main");
    }
  };

  let content;
  if (viewSelector === "main") {
    content = (
      <MainBoard
        posts={DummyPosts}
        onWriteButton={postWriteHandler}
        onPostView={postViewHandler}
      />
    );
  } else if (viewSelector === "write") {
    content = <PostWrite onCancleButton={postWriteHandler} />;
  } else {
    content = <Post onCancleButton={postViewHandler} />;
  }

  return <Container>{content}</Container>;
};

export default App;
