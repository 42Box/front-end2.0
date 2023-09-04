import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Image,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {
  EditIcon,
  DownloadIcon,
  DeleteIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import { CommentPaging } from "./CommentPaging";
import Header from "../Util/Header";
import AlertModal from "../Util/AlertModal";
import DateComponent from "../Util/DateComponent";
import { useAlert } from "../../hook/useAlert";
import apiCall from "../../util/apiCall";
import { errorHandling } from "../../util/errorHandling";
import "./ScriptBoardContent.css";
import { Like } from "./Like";
import { ScriptPreviewPop } from "./ScriptPreviewPop";
import BackGround from "../Util/BackGround";
import { FaPlay } from "react-icons/fa";

const ScriptBoardContent = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [userScriptSavedId, setUserScriptSavedId] = useState(null);
  const [isPreviewOn, setIsPreviewOn] = useState(false);
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

  // useEffect(() => {
  //   console.log("every change: ", dataSendToMac);
  // }, [dataSendToMac]);

  const errorResponseHandler = (response) => {
    errorHandling(response, navigate, errorAlert);
  };

  const postInfoApiCall = async () => {
    try {
      const response = await apiCall(
        "GET",
        `https://api.42box.kr/board-service/script-boards/${postId}`,
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
        },
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
        JSON.stringify(dataSendToMac),
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
        `https://api.42box.kr/user-service/users/me/scripts/${userScriptSavedId}`,
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
        JSON.stringify(dataSendToMac),
      );
      setUserScriptSavedId(null);
    } catch (error) {
      errorResponseHandler(error.response);
    }
  };

  const renderHandler = () => {
    setRecallPostInfo(!recallPostInfo);
  };

  const previewHandler = () => {
    setIsPreviewOn(!isPreviewOn);
  };

  return (
    <BackGround>
      <Header pageTitle="스크립트" />
      <Flex
        flexDirection="column"
        justifyContent="space-evenly"
        height="20%"
        margin={6}
      >
        <Text fontSize="35px" fontWeight="500">
          {postInfo?.title}
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Image
              src={`https://42box.kr/${postInfo?.writerProfileImagePath}`}
              width="23px"
              height="23px"
            />
            <Text
              fontSize="20px"
              marginLeft="8px"
              marginRight="0px"
              textColor="#8E8E8E"
            >
              {postInfo?.writerNickname}
            </Text>
            <Text marginLeft="5px" marginRight="5px" textColor="#8E8E8E">
              │
            </Text>
            <Text paddingTop="2px" fontSize="17px">
              <DateComponent date={postInfo?.regDate} />
            </Text>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<EditIcon />}>수정하기</MenuItem>
              <MenuItem icon={<DeleteIcon />}>삭제하기</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Divider size="20px" />
        <ScriptPreviewPop
          postInfo={postInfo}
          isPreviewOn={isPreviewOn}
          setIsPreviewOn={setIsPreviewOn}
          previewHandler={previewHandler}
          errorHandler={(response) => errorResponseHandler(response)}
        >
          <Flex justifyContent="flex-end" alignItems="center" zIndex={10}>
            <Button
              borderRadius="lg"
              border="1px #8E8E8E"
              backgroundColor="var(--DG-01, #D3D3D3)"
              color="#000000"
              margin="4px"
              zIndex={10}
              _hover={{
                border: "1.5px solid var(--Main-Orange, #FF9548)",
                background: "var(--Light-Orange, #FFF0E5)",
                color: "#FF9548",
              }}
              type="button"
              onClick={() => {
                console.log("on execute:", dataSendToMac);
                if (dataSendToMac.path) {
                  window?.webkit?.messageHandlers.executeScript.postMessage(
                    JSON.stringify(dataSendToMac),
                  );
                }
              }}
            >
              <FaPlay />
            </Button>
            {userScriptSavedId === null ? (
              <Button
                bborderRadius="lg"
                border="1px #8E8E8E"
                backgroundColor="var(--DG-01, #D3D3D3)"
                color="#000000"
                margin="4px"
                zIndex={10}
                _hover={{
                  border: "1.5px solid var(--Main-Orange, #FF9548)",
                  background: "var(--Light-Orange, #FFF0E5)",
                  color: "#FF9548",
                }}
                type="button"
                onClick={downloadFile}
              >
                <DownloadIcon />
              </Button>
            ) : (
              <Button
                borderRadius="lg"
                border="1px #8E8E8E"
                backgroundColor="var(--DG-01, #D3D3D3)"
                color="#000000"
                margin="4px"
                zIndex={10}
                _hover={{
                  border: "1.5px solid var(--Main-Orange, #FF9548)",
                  background: "var(--Light-Orange, #FFF0E5)",
                  color: "#FF9548",
                }}
                type="button"
                onClick={deleteFile}
              >
                <DeleteIcon />
              </Button>
            )}
          </Flex>
        </ScriptPreviewPop>
        <Text fontSize="22px" margin="10px 0 0 ">
          {postInfo?.content}
        </Text>
      </Flex>
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        margin={6}
        marginBottom="10px"
      >
        <Like
          postId={postInfo?.boardId}
          likeState={postInfo?.boardLiked}
          count={postInfo?.likeCount}
          onRender={renderHandler}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minWidth="55px"
          height="30px"
          rounded="15px"
          bg="transparent"
          gap="3px"
        >
          <MsgIcon height="80%" />
          <Text marginLeft="4px" color="var(--dg-01, #9E9E9E)">
            {postInfo?.commentCount}
          </Text>
        </Box>
      </Flex>
      <CommentPaging
        postId={postId}
        onRender={renderHandler}
        errorHandler={(response) => errorResponseHandler(response)}
      ></CommentPaging>
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
    </BackGround>
  );
};

export default ScriptBoardContent;
