import "./Header.css";
import { Flex, Text } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <Flex
      height="114px"
      width="100%"
      borderBottom="1px solid #C7C7C7"
      justifyContent="space-between"
    >
      <Text fontSize="35px" fontWeight="700" marginLeft="32px" marginTop="45px">
        {props.pageTitle}
      </Text>
      {props.rightButton}
    </Flex>
  );
};

export default Header;
