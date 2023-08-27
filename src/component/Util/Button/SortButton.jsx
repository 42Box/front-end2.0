import { Button, Text } from "@chakra-ui/react";

const SortButton = ({ isClicked, onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      display="flex"
      width="71px"
      height="33px"
      alignItems="center"
      flexShrink={0}
      borderRadius="20px"
      marginLeft="12px"
      marginTop="30px"
      border={
        isClicked
          ? "1.5px solid var(--main-orange, #FF9548)"
          : "1px solid #CECECE"
      }
      _hover={!isClicked && { border: "1px solid #FF9548" }}
      backgroundColor={isClicked ? "var(--light-orange, #FFF0E5)" : "#FFFFFF"}
      padding="3px"
    >
      <Text
        color={
          isClicked ? "var(--main-orange, #FF9548) " : "var(--dg-03, #8E8E8E)"
        }
        fontWeight="700"
        marginTop="2px"
      >
        {children}
      </Text>
    </Button>
  );
};

export default SortButton;
