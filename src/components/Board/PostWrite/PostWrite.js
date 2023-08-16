import React, { useState } from "react";

import styles from "./PostWrite.module.css";

import Button from "../../UI/Button";
import TopNav from "../../UI/TopNav";

const PostWrite = (props) => {
  const [isValidTitle, setIsValidTitle] = useState("true");

  const titleInputHandler = (event) => {
    if (event.target.value.trim().length > 5) {
      setIsValidTitle(true);
    } else {
      setIsValidTitle(false);
    }
  };

  return (
    <div>
      <TopNav>
        <Button onClick={props.onCancleButton}>취소</Button>
        <h2>글 작성</h2>
        <Button>제출</Button>
      </TopNav>
      <div className={styles.form}>
        <input
          type="text"
          className={`${styles.titleInput} ${
            isValidTitle ? "" : styles.invalid_input
          }`}
          placeholder="제목을 입력하세요"
          onChange={titleInputHandler}
        />
        <Button className={styles.attachButton}>파일 첨부하기</Button>
        <textarea
          className={styles.contentInput}
          placeholder="내용을 입력하세요"
        ></textarea>
      </div>
    </div>
  );
};

export default PostWrite;
