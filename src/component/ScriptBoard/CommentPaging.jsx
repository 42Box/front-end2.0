import { useEffect, useState } from "react";
import apiCall from "../../util/apiCall";
import { Button } from "@chakra-ui/react";
import CommentList from "../Comment/CommentList";
import CommentNew from "../Comment/CommentNew";

export const CommentPaging = ({ postId, errorHandler }) => {
  const [commentInfo, setCommentInfo] = useState(null);
  const [commentCurPage, setCommentCurPage] = useState(1);

  useEffect(() => {
    commentsApiCall();
    // eslint-disable-next-line
  }, [commentCurPage]);
  const commentsApiCall = async () => {
    try {
      const response = await apiCall(
        "GET",
        `https://api.42box.kr/board-service/script-boards/${postId}/comments`,
        { params: { page: commentCurPage, size: 2 } },
      );
      setCommentInfo(response.data);
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
    <div>
      <CommentNew postId={postId} />
      {commentInfo && (
        <CommentList comments={commentInfo.comments}></CommentList>
      )}
      {commentInfo?.first && (
        <Button
          width="66px"
          height="30px"
          border="30px"
          gap="6px"
          onClick={nextPageHandler}
        >
          다음
        </Button>
      )}
      {!commentInfo?.first && !commentInfo?.last && (
        <>
          <Button
            width="66px"
            height="30px"
            border="30px"
            gap="6px"
            onClick={prevPageHandler}
          >
            이전
          </Button>
          <Button
            width="66px"
            height="30px"
            border="30px"
            gap="6px"
            onClick={nextPageHandler}
          >
            다음
          </Button>
        </>
      )}
      {commentInfo?.last && (
        <Button
          width="66px"
          height="30px"
          border="30px"
          gap="6px"
          onClick={prevPageHandler}
        >
          이전
        </Button>
      )}
    </div>
  );
};
