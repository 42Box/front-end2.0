import { useEffect, useState } from "react";
import apiCall from "../../util/apiCall";
import { Flex, Icon, Text, Box } from "@chakra-ui/react";
import CommentList from "./CommentList";
import CommentNew from "./CommentNew";
import PagenationButton from "../Util/Button/PagenationButton";
import { ReactComponent as PrevIcon } from "../../asset/previous.svg";
import { ReactComponent as NextIcon } from "../../asset/next.svg";
import { ReactComponent as PrevInvalidIcon } from "../../asset/previousInvalid.svg";
import { ReactComponent as NextInvalidIcon } from "../../asset/nextInvalid.svg";
import { loginState } from "../../recoil/states";
import { useRecoilValue } from "recoil";

export const CommentPaging = ({ boardType, postId, errorHandler }) => {
  const isLogin = useRecoilValue(loginState);
  const [isComments, setIsComments] = useState(true);
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
        `https://api.42box.kr/comment-service/${boardType}/${postId}/comments`,
        { params: { page: commentCurPage, size: 15 } }
      );
      if (response.data.empty === true) {
        setIsComments(false);
        return;
      }
      setCommentInfo(response.data);
      console.log("commentInfo Api Call is successful");
    } catch (error) {
      console.log("commentInfo Api Call is fail");
      errorHandler(error.response);
    }
  };

  const nextPageHandler = () => {
    if (commentCurPage < commentInfo.totalPages - 1) {
      setCommentCurPage(commentCurPage + 1);
    }
  };

  const prevPageHandler = () => {
    if (commentCurPage > 0) {
      setCommentCurPage(commentCurPage - 1);
    }
  };

  return (
    <>
      {isLogin && (
        <CommentNew
          boardType={boardType}
          postId={postId}
          onCommentSubmit={() => {
            console.log("api call again!");
            commentsApiCall();
          }}
        />
      )}
      {isComments ? (
        <>
          {commentInfo !== null && commentInfo.totalElements > 0 && (
            <>
              <CommentList comments={commentInfo.content}></CommentList>
              <Flex
                margin={10}
                justifyContent="space-between"
                alignItems="center"
              >
                <PagenationButton
                  onClick={prevPageHandler}
                  color={commentCurPage === 0 ? "#8E8E8E" : "#FF9548"}
                  _hover={
                    commentCurPage === 0
                      ? { background: "none" }
                      : { background: "#FFF0E5" }
                  }
                >
                  <Icon
                    as={commentCurPage === 0 ? PrevInvalidIcon : PrevIcon}
                  />
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
      ) : (
        <Box width="704px" align="center" justify="center" alignSelf="center">
          <Text fontSize="25px" color="#BBBBBB" margin={0} paddingTop="40px">
            댓글이 없습니다.
          </Text>
        </Box>
      )}
    </>
  );
};
