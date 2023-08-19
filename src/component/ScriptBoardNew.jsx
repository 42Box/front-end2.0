import React, { useState } from "react";

import "./ScriptBoardNew.css";
import GoBackButton from "./Util/Button/GoBackButton";

import Header from "./Util/Header";
import Container from "./Util/Container";

const ScriptBoardNew = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDetailValid, setIsDetailValid] = useState(true);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length === event.target.value.length) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
    }
    setInputTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsDetailValid(true);
    } else {
      setIsDetailValid(false);
    }
    setInputDetail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // block sending GET request
    console.log(inputTitle);
    console.log(inputDetail);
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <Header
          pageTitle="스크립트 게시판 글쓰기"
          leftButton={<GoBackButton path="/boards/script-boards" />}
        ></Header>
        <div className={`form-control ${isTitleValid ? "" : "invalid"}`}>
          <input
            placeholder="제목을 입력하세요."
            onChange={titleChangeHandler}
          ></input>
        </div>
        <button>파일 첨부</button>
        <span>test.sh</span>
        <div className={`form-control ${isDetailValid ? "" : "invalid"}`}>
          <textarea
            placeholder="내용을 입력하세요."
            onChange={detailChangeHandler}
          ></textarea>
        </div>
        <button type="submit">등록</button>
      </Container>
    </form>
  );
};

export default ScriptBoardNew;
