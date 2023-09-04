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

const ServiceBoard = () => {
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

  const boardInfo = useGetBoardInfo("service-boards", viewOption);

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
        pageTitle="서비스 등록"
        rightButton={loginStateValue && <WriteButton path="/service/new" />}
        allowHomeNavigate={true}
        allowBoardNavigate={false}
      />
      <SearchFilterSort onSearch={searchHandler} onSort={sortHandler} />
      {boardInfo.empty ? (
        <NoPosts />
      ) : (
        <>
          <TextPreviewList to="/service/content" posts={boardInfo.content} />
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

export default ServiceBoard;
