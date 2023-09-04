import { useEffect, useState } from "react";
import apiCall from "../../util/apiCall";
import { Flex, Icon } from "@chakra-ui/react";
import CommentList from "../Comment/CommentList";
import CommentNew from "../Comment/CommentNew";
import PagenationButton from "../Util/Button/PagenationButton";
import { ReactComponent as PrevIcon } from "../../asset/previous.svg";
import { ReactComponent as NextIcon } from "../../asset/next.svg";
import { ReactComponent as PrevInvalidIcon } from "../../asset/previousInvalid.svg";
import { ReactComponent as NextInvalidIcon } from "../../asset/nextInvalid.svg";

export const CommentPaging = ({ postId, errorHandler }) => {
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
    if (commentCurPage > commentInfo.totalPages - 1) return;
    setCommentCurPage(commentCurPage + 1);
  };

  const prevPageHandler = () => {
    if (commentCurPage > 0) setCommentCurPage(commentCurPage - 1);
  };

  return (
    <>
      <CommentNew
        postId={postId}
        onCommentSubmit={() => {
          console.log("api call again!");
          commentsApiCall();
        }}
      />
      {commentInfo !== null && commentInfo.totalElements > 0 && (
        <>
          <CommentList comments={commentInfo.content}></CommentList>
          <Flex margin={10} justifyContent="space-between" alignItems="center">
            <PagenationButton
              onClick={prevPageHandler}
              color={commentCurPage === 0 ? "#8E8E8E" : "#FF9548"}
              _hover={
                commentCurPage === 0
                  ? { background: "none" }
                  : { background: "#FFF0E5" }
              }
            >
              <Icon as={commentCurPage === 0 ? PrevInvalidIcon : PrevIcon} />
              이전
            </PagenationButton>
            <PagenationButton
              onClick={nextPageHandler}
              color={
                commentCurPage === commentInfo.totalPages - 1
                  ? "#8E8E8E"
                  : "#FF9548"
              }
              _hover={
                commentCurPage === commentInfo.totalPages - 1
                  ? { background: "none" }
                  : { background: "#FFF0E5" }
              }
            >
              다음
              <Icon
                as={
                  commentCurPage === commentInfo.totalPages - 1
                    ? NextInvalidIcon
                    : NextIcon
                }
              />
            </PagenationButton>
          </Flex>
        </>
      )}
    </>
  );
};
