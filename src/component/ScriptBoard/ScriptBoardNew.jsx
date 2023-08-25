import React, { useState } from "react";

import "./ScriptBoardNew.css";

import Header from "../Util/Header";
import Container from "../Util/Container";

const ScriptBoardNew = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDetailValid, setIsDetailValid] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const titleChangeHandler = (event) => {
    setIsTitleValid(event.target.value.trim().length > 2);
    setInputTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setIsDetailValid(event.target.value.trim().length > 2);
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
    if (!isTitleValid || !isDetailValid || !selectedFile) {
      alert(
        "⚠️글을 등록할 수 없습니다.⚠️\n파일이 첨부되었는지, 제목과 내용을 2자 이상 입력하였는지 확인해주세요.",
      ); // 추후 디자인 적용
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <Header pageTitle="스크립트 게시판 글쓰기"></Header>
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
