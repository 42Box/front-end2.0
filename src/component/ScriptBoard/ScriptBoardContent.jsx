import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Divider,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import { CommentPaging } from "./CommentPaging";
import Header from "../Util/Header";
import AlertModal from "../Util/AlertModal";
import DateComponent from "../Util/DateComponent";
import { useAlert } from "../../hook/useAlert";
import apiCall from "../../util/apiCall";
import { errorHandling } from "../../util/errorHandling";
import "./ScriptBoardContent.css";
import axios from "axios";
import { Like } from "./Like";
import BasicButton from "../Util/Button/BasicButton";

const ScriptBoardContent = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [userScriptSavedId, setUserScriptSavedId] = useState(null);
  const [isPreviewOn, setIsPreviewOn] = useState(false);
  const [filePreview, setFilePreview] = useState("");
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

  const dragLimitBox = useRef(null);
  const errorAlert = useAlert();
  const successAlert = useAlert();

  useEffect(() => {
    postInfoApiCall();
    // eslint-disable-next-line
  }, [recallPostInfo]);

  useEffect(() => {
    console.log("every change: ", dataSendToMac);
  }, [dataSendToMac]);

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

  const readFileHandler = async () => {
    try {
      const response = await axios.get(
        `https://42box.kr/${postInfo.scriptPath}`
      );
      const file = response.data;
      console.log(file);
      setFilePreview(file);
    } catch (error) {
      errorResponseHandler(error.response);
    }
  };

  const renderHandler = () => {
    setRecallPostInfo(!recallPostInfo);
  };

  return (
    <Box
      width="768px" // 최대 너비 제한
      height="1024px"
      padding="4" // 패딩
      borderWidth="1px" // 테두리
      borderRadius="md" // 테두리 모서리 반경
      boxShadow="lg" // 그림자>
      ref={dragLimitBox}
    >
      <Header pageTitle="스크립트" />
      <Flex
        flexDirection="column"
        justifyContent="space-evenly"
        height="20%"
        margin={4}
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
            <DateComponent date={postInfo?.regDate} />
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
        <Popover
          placement="auto"
          matchWidth={true}
          onOpen={() => setIsPreviewOn(true)}
          onClose={() => setIsPreviewOn(false)}
        >
          <PopoverTrigger>
            <Button
              width="146px"
              height="33px"
              padding="6px 10px 6px 10px"
              margin="16px 0 0 40px"
              border="1.5px solid #000"
              rounded="full"
              gap="2px"
              background="transparent"
              onClick={readFileHandler}
              disabled={true}
            >
              {isPreviewOn ? "스크립트 닫기 " : "스크립트 미리보기"}
            </Button>
          </PopoverTrigger>
          {filePreview && (
            <PopoverContent
              width="70vw"
              height="auto"
              drag={true}
              dragConstraints={dragLimitBox}
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontSize="17px">
                {postInfo?.scriptName}
              </PopoverHeader>
              <PopoverBody
                fontSize="17px"
                dangerouslySetInnerHTML={{
                  __html: filePreview.replace(/\n/g, "<br>"),
                }}
              />
            </PopoverContent>
          )}
        </Popover>
        <Text fontSize="22px" margin="10px 0 0 ">
          {postInfo?.content}
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" marginBottom="10px">
        <BasicButton
          type="button"
          onClick={() => {
            console.log("on execute:", dataSendToMac);
            if (dataSendToMac.path) {
              window?.webkit?.messageHandlers.executeScript.postMessage(
                JSON.stringify(dataSendToMac)
              );
            }
          }}
        >
          실행
        </BasicButton>
        {/*<Button*/}
        {/*  width="66px"*/}
        {/*  height="30px"*/}
        {/*  border="1.5px solid gray"*/}
        {/*  rounded="full"*/}
        {/*  background="transparent"*/}
        {/*  gap="6px"*/}
        {/*  onClick={() => {*/}
        {/*    console.log("on execute:", dataSendToMac);*/}
        {/*    if (dataSendToMac.path) {*/}
        {/*      window?.webkit?.messageHandlers.executeScript.postMessage(*/}
        {/*        JSON.stringify(dataSendToMac),*/}
        {/*      );*/}
        {/*    }*/}
        {/*  }}*/}
        {/*>*/}
        {/*  실행*/}
        {/*</Button>*/}
        {userScriptSavedId === null ? (
          <BasicButton type="button" onClick={downloadFile}>
            저장
          </BasicButton>
        ) : (
          // <Button
          //   width="66px"
          //   height="30px"
          //   border="1.5px solid gray"
          //   rounded="full"
          //   background="transparent"
          //   gap="6px"
          //   onClick={downloadFile}
          // >
          //   저장
          // </Button>
          <BasicButton type="button" onClick={deleteFile}>
            삭제
          </BasicButton>
          // <Button
          //   width="66px"
          //   height="30px"
          //   border="1.5px solid gray"
          //   rounded="full"
          //   background="transparent"
          //   gap="6px"
          //   onClick={deleteFile}
          // >
          //   삭제
          // </Button>
        )}
      </Flex>
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
        boardType="script-baords"
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
    </Box>
  );
};

export default ScriptBoardContent;
