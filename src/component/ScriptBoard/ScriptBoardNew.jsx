import React, { useState } from "react";

import "./ScriptBoardNew.css";
import GoBackButton from "../Util/Button/GoBackButton";

import Header from "../Util/Header";
import Container from "../Util/Container";

const ScriptBoardNew = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDetailValid, setIsDetailValid] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const titleChangeHandler = (event) => {
    setIsTitleValid(event.target.value.trim().length > 10 ? true : false);
    setInputTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setIsDetailValid(event.target.value.trim().length > 0 ? true : false);
    setInputDetail(event.target.value);
  };

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // block sending GET request
    console.log(inputTitle);
    console.log(inputDetail);
    // 제목, 내용, 첨부파일 없으면 에러메시지 출력하도록
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <Header
          pageTitle="스크립트 게시판 글쓰기"
          leftButton={<GoBackButton to="/board/script" />}
        ></Header>
        <div className={`form-control ${isTitleValid ? "" : "invalid"}`}>
          <input
            placeholder="제목을 입력하세요."
            onChange={titleChangeHandler}
          ></input>
        </div>
        <input type="file" onChange={fileChangeHandler} />
        {selectedFile && <span>{selectedFile.name}</span>}
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
