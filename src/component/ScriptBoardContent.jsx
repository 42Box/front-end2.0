import "./ScriptBoardContent.css";

import Header from "./Util/Header";
import Container from "./Util/Container";
import { FaEllipsis } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";

import CommentList from "./CommentList";

import dummyComments from "../dummyComments";
import GoBackButton from "./Util/Button/GoBackButton";

const ScriptBoardContent = () => {
  return (
    <div>
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<GoBackButton to="/boards/script-boards" />}
        rightButton={<FaEllipsis className="see-options" />}
      />
      <div>title: DUMMY TITLE author: jincpark date: 2023.08.19.Sat</div>
      <GoTriangleRight className="see-script" />
      <Container backgroundColor="#ffdaba">
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
      </Container>
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
      <CommentList comments={dummyComments}></CommentList>
    </div>
  );
};

export default ScriptBoardContent;
