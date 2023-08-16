import React, { useState } from "react";

import "./Post.css";

import Container from "../../UI/Container";
import TopNav from "../../UI/TopNav";
import Button from "../../UI/Button";
import PostDate from "../../Util/PostDate";

const Post = (props) => {
  return (
    <Container>
      <TopNav>
        <Button onClick={props.onCancleButton}>뒤로가기</Button>
        <h1>스크립트 게시판</h1>
        <Button></Button>
      </TopNav>
      <div>
        {props.title} {props.author} <PostDate date={props.date} />
      </div>
    </Container>
  );
};

export default Post;
