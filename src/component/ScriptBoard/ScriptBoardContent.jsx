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
import { ScriptPreviewPop } from "./ScriptPreviewPop";
import BackGround from "../Util/BackGround";
import { BoardMain } from "./BoardMain";
import { ScriptPreviewButtons } from "./ScriptPreviewButtons";

const ScriptBoardContent = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [userScriptSavedId, setUserScriptSavedId] = useState(null);
  const [postInfo, setPostInfo] = useState(null);
  const [recallPostInfo, setRecallPostInfo] = useState(false);

  const [dataSendToMac, setDataSendToMac] = useState({
    scriptUuid: null,
    name: null, // script name
    description: null, // script 게시물 title
    path: null,
    userUuid: null,
    savedId: null,
  });

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
        `https://api.42box.kr/board-service/script-boards/${postId}`
      );

      setPostInfo(response.data);

      if (response.data.scriptSaved) {
        setUserScriptSavedId(response.data.savedId);
        setDataSendToMac((prev) => ({
          ...prev,
          name: response.data.scriptName,
          description: response.data.title,
          path: response.data.scriptPath,
          savedId: response.data.savedId,
        }));
      } else {
        setDataSendToMac((prev) => ({
          ...prev,
          name: response.data.scriptName,
          description: response.data.title,
          path: response.data.scriptPath,
        }));
      }
      console.log("postInfo Api Call is successful");
    } catch (error) {
      console.log("postInfo Api Call is fail");
      errorResponseHandler(error.response);
    }
  };

  const downloadFile = async () => {
    try {
      const response = await apiCall(
        "POST",
        "https://api.42box.kr/user-service/users/me/scripts",
        {
          name: postInfo.scriptName,
          description: postInfo.content,
          path: postInfo.scriptPath,
          userUuid: postInfo.userUuid,
          scriptUuid: postInfo.scriptUuid,
        }
      );
      console.log("file download response: ", response.data);
      await setDataSendToMac({
        savedId: response.data.savedId,
        name: response.data.name,
        description: postInfo.title,
        path: response.data.path,
        userUuid: response.data.userUuid,
        scriptUuid: response.data.scriptUuid,
      });
      window?.webkit?.messageHandlers.downloadScript.postMessage(
        JSON.stringify(dataSendToMac)
      );
      setUserScriptSavedId(response.data.savedId);
      successAlert.openAlert({
        title: "파일을 저장했습니다!",
        content: "",
      });
    } catch (error) {
      errorResponseHandler(error.response);
    }
  };

  const deleteFile = async () => {
    try {
      const response = await apiCall(
        "DELETE",
        `https://api.42box.kr/user-service/users/me/scripts/${userScriptSavedId}`
      );
      successAlert.openAlert({
        title: "파일을 삭제했습니다!",
        content: "",
      });
      console.log("file delete response: ", response.data);
      await setDataSendToMac((prev) => ({
        ...prev,
        savedId: response.data.savedId,
        userUuid: response.data.userUuid,
      }));
      window?.webkit?.messageHandlers.deleteScript.postMessage(
        JSON.stringify(dataSendToMac)
      );
      setUserScriptSavedId(null);
    } catch (error) {
      errorResponseHandler(error.response);
    }
  };

  const renderHandler = () => {
    setRecallPostInfo(!recallPostInfo);
  };

  return (
    <BackGround>
      <Header
        pageTitle="스크립트"
        allowHomeNavigate={true}
        allowBoardNavigate={true}
        boardRoute={"/script/board"}
      />
      <Box width="704px" alignItems="center" alignSelf="center">
        <BoardMain
          boardType="script-boards"
          boardId={postId}
          title={postInfo?.title}
          writerProfileImgPath={postInfo?.writerProfileImagePath}
          writerNickname={postInfo?.writerNickname}
          regDate={postInfo?.regDate}
        />
        <Divider size="20px" marginTop="15px" marginBottom="15px" />
        <ScriptPreviewPop
          postInfo={postInfo}
          errorHandle={(response) => errorResponseHandler(response)}
        >
          <ScriptPreviewButtons
            dataSendToMac={dataSendToMac}
            userScriptSavedId={userScriptSavedId}
            downloadFile={downloadFile}
            deleteFile={deleteFile}
          />
        </ScriptPreviewPop>
        <Text fontSize="20px" marginTop="15px" marginLeft="5px">
          {postInfo?.content.split("\n").map((line) => (
            <Text>
              {line}
              <br />
            </Text>
          ))}
        </Text>
        <Box padding="20px" />
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          marginTop="15px"
          marginBottom="10px"
          gap={3}
        >
          <LikeButton
            boardType="script-boards"
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
              color="#5B5B5B"
              marginLeft="3px"
              marginBottom="2.2px"
            >
              {postInfo?.commentCount}
            </Text>
          </Box>
        </Flex>
        <CommentPaging
          boardType="script-boards"
          postId={postId}
          errorHandler={(response) => errorResponseHandler(response)}
        />
        {errorAlert.alertData.isOpen && (
          <AlertModal
            open={errorAlert.alertData.isOpen}
            close={() => {
              errorAlert.closeAlert();
              navigate(`/script/content/${postId}`);
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
