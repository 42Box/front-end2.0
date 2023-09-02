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
  Text,
  Flex,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import { CommentPaging } from "./CommentPaging";
import Header from "../Util/Header";
import Container from "../Util/Container";
import AlertModal from "../Util/AlertModal";
import DateComponent from "../Util/DateComponent";
import { useAlert } from "../../hook/useAlert";
import apiCall from "../../util/apiCall";
import { errorHandling } from "../../util/errorHandling";
import "./ScriptBoardContent.css";
import IconAndCount from "../Util/IconAndCount";
import axios from "axios";

const ScriptBoardContent = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [filePreview, setFilePreview] = useState("");
  const [userScriptSavedId, setUserScriptSavedId] = useState(null);
  const [isPreviewOn, setIsPreviewOn] = useState(false);
  const [postInfo, setPostInfo] = useState(null);

  const dragLimitBox = useRef(null);
  const errorAlert = useAlert();
  const successAlert = useAlert();

  useEffect(() => {
    postInfoApiCall();
    // eslint-disable-next-line
  }, []);

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
      if (response.data.scriptSaved)
        setUserScriptSavedId(response.data.savedId);
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
      const { savedId, name, description, path, userUuid } = response.data;
      window?.webkit?.messageHandlers?.downloadScript?.postMessage(
        JSON.stringify({
          savedId: savedId,
          name: name,
          description: description,
          path: path,
          userUuid: userUuid,
        }),
      );
      setUserScriptSavedId(savedId);
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
      await apiCall(
        "DELETE",
        `https://api.42box.kr/user-service/users/me/scripts/${userScriptSavedId}`,
      );
      successAlert.openAlert({
        title: "파일을 삭제했습니다!",
        content: "",
      });
      setUserScriptSavedId(null);
    } catch (error) {
      console.log("before: ", error.response);
      errorResponseHandler(error.response);
    }
  };

  const readFileHandler = async () => {
    try {
      const response = await axios.get(
        `https://42box.kr/${postInfo.scriptPath}`,
      );
      const file = response.data;
      console.log(file);
      setFilePreview(file);
    } catch (error) {
      errorResponseHandler(error.response);
    }
  };

  return (
    <div ref={dragLimitBox}>
      <Container backgroundColor="#ffffff">
        <Header pageTitle="스크립트" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text fontSize="30px" fontWeight="500">
            {postInfo?.title}
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                src={`https://42box.kr/${postInfo?.writerProfileImagePath}`}
                width="23px"
                height="23px"
              />
              <Text marginLeft="8px">{postInfo?.writerNickname}</Text>
              <Flex marginLeft="12px" />|<Flex marginLeft="12px" />
              <DateComponent date={postInfo?.regDate} />
            </div>
            <div>
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
            </div>
          </div>
        </div>
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
              border="1.5px"
              gap="2px"
              onClick={readFileHandler}
              disabled={true}
            >
              {isPreviewOn ? "스크립트 닫기" : "스크립트 미리보기"}
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
              <PopoverHeader>{postInfo?.scriptName}</PopoverHeader>
              <PopoverBody
                dangerouslySetInnerHTML={{
                  __html: filePreview.replace(/\n/g, "<br>"),
                }}
              />
            </PopoverContent>
          )}
        </Popover>
        <div>{postInfo?.content}</div>
        <div>
          <div>
            <div>
              <Button
                width="66px"
                height="30px"
                border="30px"
                gap="6px"
                onClick={() => {
                  window?.webkit?.messageHandlers?.executeScript?.postMessage(
                    JSON.stringify({
                      savedId: postInfo?.myScriptId,
                      name: postInfo?.scriptName,
                      title: postInfo?.title,
                      path: postInfo?.scriptPath,
                      userUuid: postInfo?.userUuid,
                    }),
                  );
                }}
              >
                실행
              </Button>
              {userScriptSavedId === null ? (
                <Button
                  width="66px"
                  height="30px"
                  border="30px"
                  gap="6px"
                  onClick={downloadFile}
                >
                  저장
                </Button>
              ) : (
                <Button
                  width="66px"
                  height="30px"
                  border="30px"
                  gap="6px"
                  onClick={deleteFile}
                >
                  삭제
                </Button>
              )}
            </div>
            <Flex height="100%">
              <IconAndCount icon={<LikeIcon />} count={postInfo?.likeCount} />
              <IconAndCount icon={<MsgIcon />} count={postInfo?.commentCount} />
            </Flex>
          </div>
          <CommentPaging
            postId={postId}
            errorHandler={(response) => errorResponseHandler(response)}
          ></CommentPaging>
        </div>
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
      </Container>
    </div>
  );
};

export default ScriptBoardContent;
