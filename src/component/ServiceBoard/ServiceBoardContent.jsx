import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image, Box, Text, Flex, Divider } from "@chakra-ui/react";
import { ReactComponent as MsgIcon } from "../../asset/post-view-message.svg";
import { CommentPaging } from "./CommentPaging";
import Header from "../Util/Header";
import AlertModal from "../Util/AlertModal";
import { useAlert } from "../../hook/useAlert";
import apiCall from "../../util/apiCall";
import { errorHandling } from "../../util/errorHandling";
import { Like } from "./Like";
import BackGround from "../Util/BackGround";
import UrlBar from "./UrlBar";
import PostMetaData from "./PostMetaData";

const ScriptBoardContent = () => {
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
      <Box width="100%">
        <Header
          pageTitle="서비스 등록"
          allowHomeNavigate={true}
          allowBoardNavigate={true}
          boardRoute="/service/board"
        />
        <Flex
          flexDirection="column"
          justifyContent="space-evenly"
          height="20%"
          margin={4}
        >
          <Flex paddingTop="36px" />
          <Text fontSize="35px" fontWeight="500" margin={0}>
            {postInfo?.title}
          </Text>
          <PostMetaData postInfo={postInfo} />
          <Flex paddingTop="36px" />
          <Divider size="20px" />
          <Box paddingTop="30px" />
          {postInfo?.imagePath && (
            <Image
              src={`https://42box.kr/${postInfo.imagePath}`}
              maxWidth="704px"
              alignSelf="center"
            />
          )}
          <Box paddingTop="12px" />
          <UrlBar postInfo={postInfo} />
          <Box paddingTop="20px" />
          <Text fontSize="22px" margin="10px 0 0 ">
            {postInfo?.content}
          </Text>
        </Flex>
        <Box paddingTop="30px" />
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          marginLeft="14px"
          marginBottom="10px"
        >
          <Like
            postId={postInfo?.boardId}
            likeState={postInfo?.boardLiked}
            count={postInfo?.likeCount}
            onRender={renderHandler}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <MsgIcon height="26px" width="26px" />
            <Flex paddingLeft="4px" />
            <Text margin={0} color="##5B5B5B" fontSize="22px">
              {postInfo?.commentCount}
            </Text>
          </Box>
        </Flex>
        <Box paddingTop="77px" />
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
              navigate(`/service/content/${postId}`);
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
              navigate(`/script/content/${postId}`);
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

export default ScriptBoardContent;
