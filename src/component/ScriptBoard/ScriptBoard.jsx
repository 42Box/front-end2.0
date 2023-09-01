import { useState, useEffect } from "react";
import { loginState } from "../../recoil/states";
import { useRecoilValue } from "recoil";
import { Flex } from "@chakra-ui/react";
import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import BackGround from "../Util/BackGround";
import FilterButton from "../Util/Button/FilterButton";
import SortNewestButton from "../Util/Button/SortNewestButton";
import SortPopularButton from "../Util/Button/SortPopularButton";
import FilterOptions from "../Util/FilterOptions";
import TextPreviewList from "../TextPreview/TextPreviewList";
import useGetBoardInfo from "../../api/useGetBoardInfo";
import Pagenation from "../Util/Pagenation";

const ScriptBoard = () => {
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
    setInterval(() => localStorage.removeItem("scriptViewOption"), 10000);
  }, []);

  const boardInfo = useGetBoardInfo("script-boards", viewOption);

  const pageNationHandler = (pageIndex) => {
    setViewOption({ ...viewOption, page: pageIndex });
  };

  const [filterClicked, setFilterClicked] = useState(false);
  const [newestClicked, setNewestClicked] = useState(false);
  const [popularClicked, setPopularClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const loginStateValue = useRecoilValue(loginState);

  const toggleFilter = () => {
    setFilterClicked(!filterClicked);
    setNewestClicked(false);
    setPopularClicked(false);
  };

  const handleNewestClick = () => {
    setNewestClicked(!newestClicked);
    setFilterClicked(false);
    setPopularClicked(false);
    setSelectedOption(null);
  };

  const handlePopularClick = () => {
    setPopularClicked(!popularClicked);
    setFilterClicked(false);
    setNewestClicked(false);
    setSelectedOption(null);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setFilterClicked(false);
  };

  return (
    <BackGround>
      <Header
        pageTitle="스크립트"
        rightButton={loginStateValue && <WriteButton path="/script/new" />}
      />
      <Flex height="78.7px">
        <FilterButton
          onClick={toggleFilter}
          isClicked={filterClicked}
          selectedOption={selectedOption}
        />
        <FilterOptions
          isOpen={filterClicked}
          onSelect={handleSelectOption}
          selectedOption={selectedOption}
        />
        <SortNewestButton
          onClick={handleNewestClick}
          isClicked={newestClicked}
        />
        <SortPopularButton
          onClick={handlePopularClick}
          isClicked={popularClicked}
        />
      </Flex>
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
