import { useState, useEffect } from "react";
import { loginState } from "../../recoil/states";
import { useRecoilValue } from "recoil";
import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import BackGround from "../Util/BackGround";
import TextPreviewList from "../TextPreview/TextPreviewList";
import useGetBoardInfo from "../../api/useGetBoardInfo";
import Pagenation from "../Util/Pagenation";
import SearchFilterSort from "../Util/SearchFilterSort";

const ScriptBoard = () => {
  const loginStateValue = useRecoilValue(loginState);
  const [viewOption, setViewOption] = useState(() => {
    const storedViewOption = localStorage.getItem("scriptViewOption");
    return storedViewOption
      ? JSON.parse(storedViewOption)
      : {
          page: 0,
          size: 5,
          sort: "regDate,DESC",
          search: "",
          searchCondition: "NONE",
        };
  });

  // localStorage에 viewOption 저장
  useEffect(() => {
    localStorage.setItem("scriptViewOption", JSON.stringify(viewOption));
  }, [viewOption]);

  // 5분마다 localStorage에 저장된 viewOption 삭제
  useEffect(() => {
    setInterval(() => localStorage.removeItem("scriptViewOption"), 300000);
  }, []);

  const boardInfo = useGetBoardInfo("script-boards", viewOption);

  const pageNationHandler = (pageIndex) => {
    setViewOption({ ...viewOption, page: pageIndex });
  };

  const searchHandler = (word, condition) => {
    setViewOption({
      ...viewOption,
      page: 0,
      search: word,
      searchCondition: condition,
    });
  };

  return (
    <BackGround>
      <Header
        pageTitle="스크립트"
        rightButton={loginStateValue && <WriteButton path="/script/new" />}
      />
      <SearchFilterSort onSearch={searchHandler} />
      <TextPreviewList to="/script/content" posts={boardInfo.content} />
      <Pagenation
        onPagenation={pageNationHandler}
        current={viewOption.page}
        last={boardInfo.totalPages - 1}
      ></Pagenation>
    </BackGround>
  );
};

export default ScriptBoard;
