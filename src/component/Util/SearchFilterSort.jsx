import { useState, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import FilterButton from "./Button/FilterButton";
import FilterOptions from "./FilterOptions";
import SortNewestButton from "./Button/SortNewestButton";
import SortPopularButton from "./Button/SortPopularButton";

const SearchFilterSort = ({ onSearch }) => {
  const [filterClicked, setFilterClicked] = useState(false);
  const [newestClicked, setNewestClicked] = useState(true);
  const [popularClicked, setPopularClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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

  const filterButtonRef = useRef(null);

  return (
    <Flex height="33px" marginTop="30px" position="relative">
      <SearchBar onSearch={onSearch} />
      <FilterButton
        ref={filterButtonRef}
        onClick={toggleFilter}
        isClicked={filterClicked}
        selectedOption={selectedOption}
      />
      <FilterOptions
        isOpen={filterClicked}
        onSelect={handleSelectOption}
        selectedOption={selectedOption}
        filterButtonRef={filterButtonRef}
      />
      <SortNewestButton onClick={handleNewestClick} isClicked={newestClicked} />
      <SortPopularButton
        onClick={handlePopularClick}
        isClicked={popularClicked}
      />
    </Flex>
  );
};

export default SearchFilterSort;
