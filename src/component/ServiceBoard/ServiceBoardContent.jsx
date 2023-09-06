import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import { ReactComponent as MsgIcon } from "../../asset/post-view-message.svg";
import { CommentPaging } from "../Comment/CommentPaging";
import Header from "../Util/Header";
import AlertModal from "../Util/AlertModal";
import { useAlert } from "../../hook/useAlert";
import apiCall from "../../util/apiCall";
import { errorHandling } from "../../util/errorHandling";
import { LikeButton } from "../Util/Button/LikeButton";
import BackGround from "../Util/BackGround";
import UrlBar from "./UrlBar";
import { BoardMain } from "../ScriptBoard/BoardMain";

const ServiceBoardContent = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [postInfo, setPostInfo] = useState(null);
  const [recallPostInfo, setRecallPostInfo] = useState(false);

  const errorAlert = useAlert();
  const successAlert = useAlert();

  useEffect(() => {
    postInfoApiCall();
    // eslint-disable-next-line
  }, [recallPostInfo]);

  const errorResponseHandler = (response) => {
    errorHandling(response, navigate, errorAlert);
  };

  const postInfoApiCall = async () => {
    try {
      const response = await apiCall(
        "GET",
        `https://api.42box.kr/board-service/service-boards/${postId}`,
      );

      setPostInfo(response.data);
      console.log("postInfo Api Call is successful");
    } catch (error) {
      console.log("postInfo Api Call is fail");
      errorResponseHandler(error.response);
    }
  };

  const renderHandler = () => {
    setRecallPostInfo(!recallPostInfo);
  };

  return (
    <BackGround>
      <Header
        pageTitle="서비스 등록"
        allowHomeNavigate={true}
        allowBoardNavigate={true}
        boardRoute="/service/board"
      />
      <Flex padding="10px" />
      <Flex
        flexDirection="column"
        justifyContent="space-evenly"
        height="20%"
        margin={6}
      >
        <BoardMain
          boardType="service-boards"
          boardId={postId}
          title={postInfo?.title}
          writerProfileImgPath={postInfo?.writerProfileImagePath}
          writerNickname={postInfo?.writerNickname}
          regDate={postInfo?.regDate}
        />
        <Flex padding="10px" />
        <Divider size="20px" marginTop="15px" marginBottom="15px" />
        <Flex padding="10px" />
        <UrlBar postInfo={postInfo} />
        <Text fontSize="20px" marginTop="25px" marginLeft="5px">
          {postInfo?.content.split("\n").map((line) => (
            <Text>
              {line}
              <br />
            </Text>
          ))}
        </Text>
      </Flex>
      <Box padding="20px" />
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        margin={6}
        marginTop="15px"
        marginBottom="10px"
        paddingLeft="10px"
        gap={3}
      >
        <LikeButton
          boardType="service-boards"
          postId={postInfo?.boardId}
          likeState={postInfo?.boardLiked}
          count={postInfo?.likeCount}
          onRender={renderHandler}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={1}
        >
          <MsgIcon height="26px" width="26px" />
          <Flex paddingLeft="2px" />
          <Text
            fontSize="22px"
            margin={0}
            color="##5B5B5B"
            marginLeft="3px"
            marginBottom="2.2px"
          >
            {postInfo?.commentCount}
          </Text>
        </Box>
      </Flex>
      <CommentPaging
        boardType="service-boards"
        postId={postId}
        onRender={renderHandler}
        errorHandler={(response) => errorResponseHandler(response)}
      ></CommentPaging>
      {errorAlert.alertData.isOpen && (
        <AlertModal
          open={errorAlert.alertData.isOpen}
          close={() => {
            errorAlert.closeAlert();
            // navigate(`/service/content/${postId}`);
          }}
          header={errorAlert.alertData.title}
        >
          <Text>{errorAlert.alertData.content}</Text>
        </AlertModal>
      )}
      {successAlert.alertData.isOpen && (
        <AlertModal
          open={successAlert.alertData.isOpen}
          close={() => {
            successAlert.closeAlert();
            navigate(`/service/content/${postId}`);
          }}
          header={successAlert.alertData.title}
        >
          <Text>{successAlert.alertData.content}</Text>
        </AlertModal>
      )}
    </BackGround>
  );
};

export default ServiceBoardContent;
