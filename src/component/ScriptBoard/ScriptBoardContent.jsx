import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEllipsis } from "react-icons/fa6";
import { Button, Text } from "@chakra-ui/react";
import Header from "../Util/Header";
import Container from "../Util/Container";
import AlertModal from "../Util/AlertModal";
import { useAlert } from "../../hook/useAlert";
import "./ScriptBoardContent.css";
import apiCall from "../../util/apiCall";

const ScriptBoardContent = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [postInfo, setPostInfo] = useState(null);

  // const [commentList, setCommentList] = useState([]);
  // const [commentCurPage, setCommentCurPage] = useState(1);

  const errorAlert = useAlert();
  const successAlert = useAlert();

  useEffect(() => {
    postInfoApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errorHandling = (response) => {
    console.log("after: ", response);
    if (response.status === 400) {
      errorAlert.openAlert({ title: "요청 실패", content: "400💥" });
      console.log("hi");
    } else if (response.status === 401) {
      errorAlert.openAlert({
        title: "다시 로그인해주세요",
        content: "401💥",
      });
      window.localStorage.removeItem("loginState");
      navigate("/");
    } else if (response.status === 404)
      errorAlert.openAlert({
        title: "파일을 먼저 저장해주세요",
        content: "404💥",
      });
    else if (response.status === 500 || response.status === 503)
      errorAlert.openAlert({
        title: "서버 에러(신고 부탁드립니다🙏)",
        content: "50X💥",
      });
    else {
      errorAlert.openAlert({
        title: "알 수 없는 에러(신고 부탁드립니다🙏)",
        content: "🥲",
      });
    }
  };

  const postInfoApiCall = async () => {
    try {
      const response = await apiCall(
        "GET",
        `https://api.42box.site/board-service/script-boards/${postId}`,
      );
      setPostInfo(response.data);
    } catch (error) {
      errorHandling(error.response);
    }
  };

  // const commentsApiCall = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.42box.site/board-service/script-boards/${postId}/comments`,
  //       { params: { page: commentCurPage, size: 2 } },
  //     );
  //     setCommentList(response.data.commentList);
  //   } catch (error) {
  //     errorHandling(error.response);
  //   }
  // };

  const downloadFile = async () => {
    try {
      const response = await apiCall(
        "POST",
        "https://api.42box.site/user-service/users/me/scripts",
        {
          name: postInfo?.scriptName,
          description: postInfo?.content,
          path: postInfo?.scriptPath,
        },
      );
      const { savedId, name, description, path } = response.data;
      window?.webkit?.messageHandlers?.downloadScript?.postMessage(
        JSON.stringify({
          savedId: savedId,
          name: name,
          description: description,
          path: path,
        }),
      );
      successAlert.openAlert({
        title: "파일을 다운로드했습니다!",
        content: "",
      });
    } catch (error) {
      console.log(error);
      errorHandling(error.response);
    }
  };

  const deleteFile = async () => {
    try {
      await apiCall(
        "DELETE",
        `https://api.42box.site/user-service/users/me/scripts/${postInfo?.myScriptId}`,
      );
      successAlert.openAlert({
        title: "파일을 삭제했습니다!",
        content: "",
      });
    } catch (error) {
      console.log("before: ", error.response);
      errorHandling(error.response);
    }
  };

  return (
    <Container backgroundColor="#ffffff">
      <Header
        pageTitle="스크립트"
        rightButton={<FaEllipsis className="see-options" />}
      />
      <div>
        <div>
          <div>{postInfo?.title}</div>
          <div>
            author: {postInfo?.writerNickname}
            date: {postInfo?.regDate.substring(0, 10)}
          </div>
        </div>
        {/*meat-ball menubar*/}
      </div>
      <div>
        <a href={`https://42box.kr/${postInfo?.scriptPath}`} download>
          <Button
            width="146px"
            height="33px"
            padding="6px 10px 6px 10px"
            border="1.5px"
            gap="2px"
            disabled={true}
          >
            스크립트 미리보기
          </Button>
        </a>
      </div>
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
                    description: postInfo?.content,
                    path: postInfo?.scriptPath,
                  }),
                );
              }}
            >
              실행
            </Button>
            {postInfo?.scriptSaved ? (
              <Button
                width="66px"
                height="30px"
                border="30px"
                gap="6px"
                onClick={deleteFile}
              >
                삭제
              </Button>
            ) : (
              <Button
                width="66px"
                height="30px"
                border="30px"
                gap="6px"
                onClick={downloadFile}
              >
                저장
              </Button>
            )}
          </div>
          <div>
            <button>좋아요</button>
            <button>안돼요</button>
          </div>
        </div>
        <div>댓글창 구역</div>
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
  );
};

export default ScriptBoardContent;
