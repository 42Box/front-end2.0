import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LittleHeader = (props) => {
  return (
    <Flex
      width="704px"
      height="53px"
      justifyContent="space-between"
      borderBottom="1px solid #C7C7C7"
    >
      <Text fontWeight="700" fontSize="24px">
        {props.title}
      </Text>
      <Link to={props.to}>
        <Text marginTop="16px" color="gray">
          전체보기
        </Text>
      </Link>
    </Flex>
  );
};

export default LittleHeader;
