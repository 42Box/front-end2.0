import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { loginState } from "../../recoil/states";
import { searchBarState } from "../../recoil/searchBarState";
import { useRecoilValue } from "recoil";
import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import BackGround from "../Util/BackGround";
import TextPreviewList from "../TextPreview/TextPreviewList";
import useGetBoardInfo from "../../api/useGetBoardInfo";
import Pagenation from "../Util/Pagenation";
import SearchFilterSort from "../Util/SearchFilterSort";
import NoPosts from "../Util/NoPosts";

const ScriptBoard = () => {
  const searchWord = useRecoilValue(searchBarState);
  const loginStateValue = useRecoilValue(loginState);
  const searchBarStateValue = useRecoilValue(searchBarState);
  const [queryParams] = useSearchParams();

  const [viewOption, setViewOption] = useState(
    queryParams.toString() === ""
      ? {
          page: 0,
          size: 5,
          sort: "regDate,DESC",
          search: "",
          searchCondition: "NONE",
        }
      : Object.fromEntries(queryParams)
  );

  const boardInfo = useGetBoardInfo("script-boards", viewOption);

  const pageNationHandler = (pageIndex) => {
    setViewOption({ ...viewOption, page: pageIndex });
  };

  const searchHandler = (word) => {
    setViewOption({
      ...viewOption,
      page: 0,
      search: word,
      searchCondition: "ALL",
    });
  };

  const searchOptionHandler = (condition) => {
    setViewOption({
      ...viewOption,
      page: 0,
      search: searchWord,
      searchCondition: condition,
    });
  };

  const sortHandler = (sortOption) => {
    setViewOption({
      page: 0,
      size: 5,
      sort: sortOption,
      search: searchBarStateValue === "" ? "" : viewOption.search,
      searchCondition:
        searchBarStateValue === "" ? "NONE" : viewOption.searchCondition,
    });
  };

  return (
    <BackGround>
      <Header
        pageTitle="스크립트"
        rightButton={loginStateValue && <WriteButton path="/script/new" />}
        allowHomeNavigate={true}
        allowBoardNavigate={false}
      />
      <SearchFilterSort
        onSearch={searchHandler}
        onSearchOption={searchOptionHandler}
        onSort={sortHandler}
      />
      {boardInfo.empty ? (
        <NoPosts />
      ) : (
        <>
          <TextPreviewList to="/script/content" posts={boardInfo.content} />
          <Pagenation
            onPagenation={pageNationHandler}
            current={viewOption.page}
            totalPages={boardInfo.totalPages}
          ></Pagenation>
        </>
      )}
    </BackGround>
  );
};

export default ScriptBoard;
