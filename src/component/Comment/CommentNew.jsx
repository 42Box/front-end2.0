import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import apiCall from "../../util/apiCall";
import "./CommentNew.css";
import { useAlert } from "../../hook/useAlert";
import AlertModal from "../Util/AlertModal";
import { errorHandling } from "../../util/errorHandling";

const CommentNew = ({ postId }) => {
  const navigate = useNavigate();
  const [isInputValid, setIsInputValid] = useState(true);
  const [commentContent, setCommentContent] = useState("");

  const errorAlert = useAlert();

  const submitHandler = async (event) => {
    // POST request
    // move to ScriptBoard
    event.preventDefault();
    try {
      if (
        commentContent.trim().length < 1 ||
        commentContent.trim().length > 500
      ) {
        setIsInputValid(false);
        errorAlert.openAlert({
          title: "글자를 입력해주세요.",
          content: "📝",
        });
        return;
      }
      const response = await apiCall(
        "POST",
        `comment-service/script-boards/${postId}/comments`,
        {
          commentContent: commentContent,
        },
      );
      setCommentContent("");
      event.target.value = "";
      navigate(`/script/content/${response.data.commentBoardId}`);
    } catch (error) {
      errorHandling(error.response, navigate, errorAlert);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="comment-form">
        <textarea
          onChange={(event) => setCommentContent(event.target.value)}
          placeholder="댓글을 입력하세요."
        ></textarea>
        <div className="button-wrap">
          <Button className="comment-form-button" type="submit">
            등록
          </Button>
        </div>
      </div>
      {!isInputValid && (
        <AlertModal
          open={errorAlert.alertData.isOpen}
          close={() => {
            errorAlert.closeAlert();
            setIsInputValid(true);
            navigate(`/script/content/${postId}`);
          }}
          header={errorAlert.alertData.title}
        >
          <Text>{errorAlert.alertData.content}</Text>
        </AlertModal>
      )}
    </form>
  );
};

export default CommentNew;
