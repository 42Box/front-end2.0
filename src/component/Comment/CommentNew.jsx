import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import apiCall from "../../util/apiCall";
import "./CommentNew.css";
import { useAlert } from "../../hook/useAlert";
import AlertModal from "../Util/AlertModal";
import { errorHandling } from "../../util/errorHandling";

const CommentNew = ({ postId, onCommentSubmit }) => {
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
      console.log("comment post api response: ", response.data);
      setCommentContent("");
      event.target.value = "";
      if (onCommentSubmit) onCommentSubmit();
    } catch (error) {
      errorHandling(error.response, navigate, errorAlert);
    }
  };

  return (
    <Flex width="100%" position="relative" justify-content="center">
      <Textarea
        height="130px"
        width="100%"
        display="flex"
        placeholder="댓글을 입력하세요."
        value={commentContent}
        onChange={(event) => {
          setCommentContent(event.target.value);
        }}
      />
      <Box ml="auto">
        <Button
          position="absolute"
          bottom="5px"
          right="5px"
          type="submit"
          onClick={submitHandler}
        >
          등록
        </Button>
      </Box>
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
    </Flex>
  );
};

export default CommentNew;
