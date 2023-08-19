import { useState } from "react";

import "./CommentNew.css";

const CommentNew = () => {
  const [isInputValid, setIsInputValid] = useState(true);
  const inputChangeHandler = (event) => {
    setIsInputValid(event.target.value.trim().length === 0 ? false : true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isInputValid) {
      return;
    }
    // POST request
    // move to ScriptBoard
  };

  return (
    <form className="comment-textarea" onSubmit={submitHandler}>
      <textarea
        onChange={inputChangeHandler}
        placeholder="댓글을 입력하세요."
      ></textarea>
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentNew;
