import { Flex, Icon, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ReactComponent as PlusBlackIcon } from "../../asset/plus-black.svg";

const UrlBar = ({ postInfo }) => {
  return (
    <Flex
      alignSelf="center"
      height="45px"
      borderRadius="12px"
      border="1px solid #DDDDDD"
      width="500px"
      fontSize="20px"
      fontWeight="600"
      alignItems="center"
      paddingLeft="5px"
      paddingRight="3px"
    >
      <a href={postInfo?.serviceUrl}>
        <Icon
          as={ExternalLinkIcon}
          height="20px"
          width="20px"
          boxSize="8"
          borderRadius="12px"
          _hover={{ background: "#EEEEEE" }}
        />
      </a>
      <Text paddingTop="8px" height="45px" width="500px" align="center">
        {postInfo?.serviceUrl}
      </Text>
      <Icon
        as={PlusBlackIcon}
        boxSize="10"
        borderRadius="12px"
        _hover={{
          background: "#EEEEEE",
        }}
        cursor="pointer"
      />
    </Flex>
  );
};

export default UrlBar;
