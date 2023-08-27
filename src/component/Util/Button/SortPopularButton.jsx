import SortButton from "./SortButton";
import { Text } from "@chakra-ui/react";

const SortPopularButton = ({ onClick, isClicked }) => {
  return (
    <SortButton onClick={onClick} isClicked={isClicked}>
      <Text
        color={
          isClicked ? "var(--main-orange, #FF9548) " : "var(--dg-03, #8E8E8E)"
        }
        fontWeight="700"
        marginTop="2px"
      >
        추천순
      </Text>
    </SortButton>
  );
};

export default SortPopularButton;
