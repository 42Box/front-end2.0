import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import apiCall from "../../util/apiCall";
import { Button } from "@chakra-ui/react";
import "./CommentNew.css";

const CommentNew = (postId) => {
  // const navigate = useNavigate();
  const [isInputValid, setIsInputValid] = useState(true);
  const [commentDescription, setCommentDescription] = useState("");

  useEffect(() => {}, [commentDescription]);

  const inputChangeHandler = (event) => {
    const description = event.target.value;
    setIsInputValid(description.trim().length === 0);
    setCommentDescription(description);
  };

  const submitHandler = async (event) => {
    // POST request
    // move to ScriptBoard
    event.preventDefault();
    try {
      if (!isInputValid) return;
      // await apiCall(
      //   "POST",
      //   `comment-service/script-boards/${postId}/comments`,
      //   commentDescription,
      // );
      // event.target.value = "";
      // navigate(-1);
    } catch (error) {}
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="comment-form">
        <textarea
          onChange={inputChangeHandler}
          placeholder="댓글을 입력하세요."
        ></textarea>
        <div className="button-wrap">
          <Button className="comment-form-button" type="submit">
            등록
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommentNew;
