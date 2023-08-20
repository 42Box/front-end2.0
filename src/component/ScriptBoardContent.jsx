import "./ScriptBoardContent.css";

import Header from "./Util/Header";
import Container from "./Util/Container";
import { FaEllipsis } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";

import CommentNew from "./CommentNew";
import CommentList from "./CommentList";

import dummyComments from "../dummyComments";
import GoBackButton from "./Util/Button/GoBackButton";

const ScriptBoardContent = () => {
  return (
    <Container backgroundColor="#ffffff">
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<GoBackButton to="/boards/script-boards" />}
        rightButton={<FaEllipsis className="see-options" />}
      />
      <div className="comments-section">
        <div>title: DUMMY TITLE author: jincpark date: 2023.08.19.Sat</div>
        <GoTriangleRight className="see-script" />
        This is dummy content This is dummy content This is dummy content This
        is dummy content This is dummy content This is dummy content This is
        dummy content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content This is dummy content This is dummy
        content This is dummy content
        <div>
          <div>
            <button>실행</button>
            <button>다운로드</button>
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
