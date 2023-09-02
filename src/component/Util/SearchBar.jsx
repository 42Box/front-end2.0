import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(inputValue, "TITLE");
    }
  };
  const searchIconHandler = () => {
    onSearch(inputValue, "TITLE");
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <InputGroup
      height="33px"
      marginLeft="32px"
      width="200px"
      alignItems="center"
    >
      <Input
        placeholder="검색어를 입력하세요."
        width="200px"
        height="100%"
        borderRadius="20px"
        onKeyDown={handleKeyDown}
        _hover={{ borderColor: "#FF9548" }}
        _focus={{ borderColor: "#FF9548" }}
        onChange={handleInputValue}
      />
      <InputRightElement height="33px" width="33px" cursor="pointer">
        <SearchIcon
          color="#C7C7C7"
          _hover={{ color: "#FF9548", transform: "scale(1.2)" }}
          onClick={searchIconHandler}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
