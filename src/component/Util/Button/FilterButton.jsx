import { Button, Text, Flex } from "@chakra-ui/react";
import FilterArrow from "../FilterArrow";
import { forwardRef } from "react";

const FilterButton = forwardRef(
  ({ onClick, isClicked, selectedOption }, ref) => {
    const buttonText = selectedOption ? selectedOption : "필터";
    const isSelected = selectedOption !== null;

    return (
      <Button
        onClick={onClick}
        display="flex"
        height="33px"
        flexShrink={0}
        borderRadius="20px"
        marginLeft="12px"
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
        ref={ref}
      >
        <Flex paddingLeft="11px" alignItems="center" paddingRight="11px">
          <Text
            color={
              isSelected || isClicked
                ? "var(--main-orange, #FF9548)"
                : "var(--dg-03, #8E8E8E)"
            }
            fontWeight="700"
            margin={0}
          >
            {buttonText}
          </Text>
          <FilterArrow isClicked={isClicked} isSelected={isSelected} />
        </Flex>
      </Button>
    );
  }
);

export default FilterButton;
