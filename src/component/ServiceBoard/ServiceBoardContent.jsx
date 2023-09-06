import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Text, Flex, Divider, Image } from "@chakra-ui/react";
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
        `https://api.42box.kr/board-service/service-boards/${postId}`
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
      <Box alignItems="center" width="704px" alignSelf="center">
        <BoardMain
          boardType="service-boards"
          boardId={postId}
          title={postInfo?.title}
          writerProfileImgPath={postInfo?.writerProfileImagePath}
          writerNickname={postInfo?.writerNickname}
          regDate={postInfo?.regDate}
        />
        <Divider size="20px" marginTop="15px" marginBottom="15px" />
        <Flex padding="10px" />
        {postInfo?.imagePath && (
          <Image
            src={"https://42box.kr/" + postInfo?.imagePath}
            width="100%"
            objectFit="contain"
          />
        )}
        <Flex padding="10px" />
        <UrlBar postInfo={postInfo} />
        <Box paddingTop="40px" />
        {postInfo?.content.split("\n").map((line) => (
          <Text fontSize="20px" margin={0}>
            {line}
            <br />
          </Text>
        ))}
        <Box height="77px" />
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          height="32px"
          marginBottom="18px"
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
              fontWeight="500"
              color="#5B5B5B"
              fontSize="22px"
              margin={0}
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
      </Box>
    </BackGround>
  );
};

export default ServiceBoardContent;
