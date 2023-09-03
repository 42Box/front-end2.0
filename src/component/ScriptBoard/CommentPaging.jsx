import { useEffect, useState } from "react";
import apiCall from "../../util/apiCall";
import { Box, Button, Flex } from "@chakra-ui/react";
import CommentList from "../Comment/CommentList";
import CommentNew from "../Comment/CommentNew";

export const CommentPaging = ({ postId, onRender, errorHandler }) => {
  const [commentInfo, setCommentInfo] = useState(null);
  const [commentCurPage, setCommentCurPage] = useState(0);

  useEffect(() => {
    commentsApiCall();
    // eslint-disable-next-line
  }, [commentCurPage]);

  const commentsApiCall = async () => {
    try {
      const response = await apiCall(
        "GET",
        `https://api.42box.kr/comment-service/script-boards/${postId}/comments`,
        { params: { page: commentCurPage, size: 5 } },
      );
      setCommentInfo(response.data);
      onRender();
      console.log("commentInfo Api Call is successful");
    } catch (error) {
      console.log("commentInfo Api Call is fail");
      errorHandler(error.response);
    }
  };

  const nextPageHandler = () => {
    if (commentCurPage + 1 > commentInfo.totalPages) return;
    setCommentCurPage(commentCurPage + 1);
  };

  const prevPageHandler = () => {
    if (commentCurPage - 1 < 0) return;
    setCommentCurPage(commentCurPage - 1);
  };

  return (
    <Box>
      <CommentNew
        postId={postId}
        onCommentSubmit={() => {
          console.log("api call again!");
          commentsApiCall();
        }}
      />
      {commentInfo && commentInfo.totalElements > 0 && (
        <CommentList comments={commentInfo.content}></CommentList>
      )}
      <Flex
        justifyContent="center"
        alignItems="center"
        bottom="0"
        background="white" // 필요에 따라 배경색을 조정할 수 있습니다.
        padding="10px"
        zIndex="1"
      >
        {commentInfo && commentInfo.totalElements > 0 && commentInfo.first && (
          <Button
            width="66px"
            height="30px"
            rounded="full"
            background="transparent"
            gap="6px"
            onClick={nextPageHandler}
          >
            다음️ ▶
          </Button>
        )}
        {commentInfo &&
          commentInfo.totalElements > 0 &&
          !commentInfo.first &&
          !commentInfo.last && (
            <>
              <Button
                width="66px"
                height="30px"
                rounded="full"
                background="transparent"
                gap="6px"
                onClick={prevPageHandler}
              >
                ◀ 이전
              </Button>
              <Button
                width="66px"
                height="30px"
                rounded="full"
                background="transparent"
                gap="6px"
                onClick={nextPageHandler}
              >
                다음 ▶
              </Button>
            </>
          )}
        {commentInfo && commentInfo.totalElements > 0 && commentInfo.last && (
          <Button
            width="66px"
            height="30px"
            rounded="full"
            background="transparent"
            gap="6px"
            onClick={prevPageHandler}
          >
            ◀ 이전
          </Button>
        )}
      </Flex>
    </Box>
  );
};
