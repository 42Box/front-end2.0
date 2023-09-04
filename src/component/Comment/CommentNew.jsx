import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import apiCall from "../../util/apiCall";
import "./CommentNew.css";
import { useAlert } from "../../hook/useAlert";
import AlertModal from "../Util/AlertModal";
import { errorHandling } from "../../util/errorHandling";

const CommentNew = ({ boardType, postId, onCommentSubmit }) => {
  const navigate = useNavigate();
  const [isInputValid, setIsInputValid] = useState(true);
  const [commentContent, setCommentContent] = useState("");

  const errorAlert = useAlert();

  const submitHandler = async (event) => {
    // POST request
    // move to ScriptBoard
    event.preventDefault();
    try {
      if (commentContent.trim().length < 1) {
        setIsInputValid(false);
        errorAlert.openAlert({
          title: "글자를 입력해주세요.",
          content: "📝",
        });
        return;
      }
      if (commentContent.trim().length > 500) {
        setIsInputValid(false);
        errorAlert.openAlert({
          title: "500글자를 초과했습니다.",
          content: "⚠️",
        });
        return;
      }
      const response = await apiCall(
        "POST",
        `comment-service/${boardType}/${postId}/comments`,
        {
          commentContent: commentContent,
        }
      );
      console.log("comment post api response: ", response.data);
      setCommentContent("");
      event.target.value = "";
      if (onCommentSubmit) onCommentSubmit();
    } catch (error) {
      errorHandling(error.response, navigate, errorAlert);
    }
  };

  const handleKeyPress = (event) => {
    if (event.shiftKey && event.key === "Enter") {
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      submitHandler(event);
      return;
    }
  };

  return (
    <Box margin={7} marginTop="5px">
      <Flex width="100%" position="relative" justify-content="center">
        <Textarea
          height="145px"
          width="100%"
          placeholder="댓글을 입력하세요."
          value={commentContent}
          onChange={(event) => {
            setCommentContent(event.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
        <Box ml="auto">
          <Button
            position="absolute"
            bottom="10px"
            right="10px"
            height="2em"
            type="submit"
            zIndex={10}
            borderRadius="15px"
            border="1px solid #8E8E8E"
            backgroundColor="transparent"
            color="#8E8E8E"
            _hover={{
              border: "1.5px solid var(--Main-Orange, #FF9548)",
              background: "var(--Light-Orange, #FFF0E5)",
              color: "#FF9548",
            }}
            onClick={submitHandler}
          >
            등록하기
          </Button>
        </Box>
        {!isInputValid && (
          <AlertModal
            open={errorAlert.alertData.isOpen}
            close={() => {
              errorAlert.closeAlert();
              setIsInputValid(true);
            }}
            header={errorAlert.alertData.title}
          >
            <Text>{errorAlert.alertData.content}</Text>
          </AlertModal>
        )}
      </Flex>
    </Box>
  );
};

export default CommentNew;
