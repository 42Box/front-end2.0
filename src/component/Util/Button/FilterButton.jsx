import { Button, Text, Flex } from "@chakra-ui/react";
import FilterArrow from "../FilterArrow";

const FilterButton = ({ onClick, isClicked, selectedOption }) => {
  const buttonText = selectedOption ? selectedOption : "필터";
  const isSelected = selectedOption !== null;

  return (
    <Button
      onClick={onClick}
      display="flex"
      height="33px"
      alignItems="center"
      flexShrink={0}
      borderRadius="20px"
      marginLeft="32px"
      marginTop="30px"
      border={
        isSelected || isClicked
          ? "1.5px solid var(--main-orange, #FF9548)"
          : "1px solid #CECECE"
      }
      _hover={!isClicked && !isSelected && { border: "1px solid #FF9548" }}
      backgroundColor={
        isSelected || isClicked ? "var(--light-orange, #FFF0E5)" : "#FFFFFF"
      }
      padding="3px"
    >
      <Flex paddingLeft="11px" paddingRight="11px">
        <Text
          color={
            isSelected || isClicked
              ? "var(--main-orange, #FF9548)"
              : "var(--dg-03, #8E8E8E)"
          }
          fontWeight="700"
          marginTop="2px"
        >
          {buttonText}
        </Text>
        <FilterArrow isClicked={isClicked} isSelected={isSelected} />
      </Flex>
    </Button>
  );
};

export default FilterButton;
