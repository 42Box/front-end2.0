import { useState } from "react";
import { loginState } from "../../atom/states";
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
import dummyPosts from "../../dummyPosts";

const ScriptBoard = () => {
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
      <TextPreviewList to="/script/content" posts={dummyPosts} />
    </BackGround>
  );
};

export default ScriptBoard;
