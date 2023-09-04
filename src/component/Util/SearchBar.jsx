import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { searchBarState } from "../../recoil/searchBarState";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useRecoilState(searchBarState);
  // const [isValidInput, setIsValidInput] = useState(true);

  const handleSearch = () => {
    // if (inputValue !== "") {
    //   // setIsValidInput(true);
    //   onSearch(inputValue, "TITLE");
    // } else {
    //   // setIsValidInput(false);
    // }
    onSearch(inputValue, "TITLE");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const searchIconHandler = () => {
    handleSearch();
  };

  const inputValueHandler = (event) => {
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
        borderColor="#CECECE"
        onChange={inputValueHandler}
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
