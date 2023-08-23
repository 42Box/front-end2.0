import Header from "../Util/Header";
import RefreshButton from "../Util/Button/RefreshButton";
import WriteButton from "../Util/Button/WriteButton";
import Container from "../Util/Container";

import TextPreviewList from "../TextPreview/TextPreviewList";
import dummyPosts from "../../dummyPosts";
import { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import "./ScriptBoard.css";

const ScriptBoard = () => {
  const [viewFilterList, setViewFilterList] = useState(false);

  const filterList = ["추천 20 미만", "추천 30개 미만"];
  return (
    <Container>
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/boards/script-boards/new" />}
      ></Header>
      <div className={"sort-option"}>
        <button>최신순</button>
        <button>추천순</button>
        <div className={"filter-option"}>
          {viewFilterList === true
            ? filterList.map((filter) => <li>{filter}</li>)
            : "   "}
        </div>
        <div>{viewFilterList === false && "정렬 필터"}</div>
        <div onClick={() => setViewFilterList(!viewFilterList)}>
          {viewFilterList === true ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
        </div>
      </div>
      <TextPreviewList posts={dummyPosts} />
    </Container>
  );
};

export default ScriptBoard;
