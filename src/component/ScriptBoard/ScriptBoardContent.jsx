import { useState } from "react";
import Header from "../Util/Header";
import Container from "../Util/Container";
import CommentNew from "../Comment/CommentNew";
import CommentList from "../Comment/CommentList";
import { FaEllipsis } from "react-icons/fa6";
import { BiSolidUpArrow, BiSolidRightArrow } from "react-icons/bi";
import "./ScriptBoardContent.css";
import dummyComments from "../../dummyComments";
// import {useParams} from "react-router-dom";

const ScriptBoardContent = () => {
  const [openPreview, setOpenPreview] = useState(false);
  // const params = useParams();
  // const { id } = params;
  // api/id 요청해서 없으면 오류메시지
  const path = "https://42box.kr/user_profile_image/cleanCache.sh"; // 나중에 스크립트 절대 경로를 꺼내오기(?)

  const scriptContent =
    "Functions starting with use are called Hooks. " +
    "useState is a built-in Hook provided by React. " +
    "You can find other built-in Hooks in the API reference. " +
    "You can also write your own Hooks by combining the existing ones. " +
    "Hooks are more restrictive than other functions. " +
    "You can only call Hooks at the top of your components (or other Hooks). " +
    "If you want to use useState in a condition or a loop, extract a new component and put it there.";

  const downloadFile = async (path) => {
    try {
      window.webkit.messageHandlers.download.postMessage(path);
    } catch (error) {
      console.error("Error downloading file:", error);
      // 추후 실패 모달
    }
  };

  return (
    <Container backgroundColor="#ffffff">
      <Header
        pageTitle="스크립트 게시판"
        rightButton={<FaEllipsis className="see-options" />}
      />
      <div className="comments-section">
        <div className={"title"}>
          <div>title: DUMMY TITLE</div>
          <div>author: jincpark date: 2023.08.19.Sat</div>
        </div>
        <ul
          className={"see-script"}
          onClick={() => setOpenPreview(!openPreview)}
        >
          <li>
            {openPreview === true ? <BiSolidUpArrow /> : <BiSolidRightArrow />}
          </li>
          <li>{openPreview === true && scriptContent}</li>
          <li>{openPreview === false && "스크립트 보기"}</li>
        </ul>
        <div>{scriptContent}</div>
        <div>
          <div>
            <button onClick={() => downloadFile(path)}>다운로드</button>
            <button>실행</button>
          </div>
          <div>
            <button>좋아요</button>
            <button>안돼요</button>
          </div>
        </div>
        <CommentNew />
        <CommentList comments={dummyComments}></CommentList>
      </div>
    </Container>
  );
};

export default ScriptBoardContent;
