import "./ScriptBoardNew.css";
import GoBackButton from "./Util/Button/GoBackButton";

import Header from "./Util/Header";

const ScriptBoardNew = () => {
  return (
    <Header
      pageTitle="스크립트 게시판 글쓰기"
      leftButton={<GoBackButton path="/boards/script-boards" />}
    ></Header>
  );
};

export default ScriptBoardNew;
