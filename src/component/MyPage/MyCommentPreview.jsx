import { Box, Text, Flex } from "@chakra-ui/react";

import DateComponent from "../Util/DateComponent";

const MyCommentPreview = ({ title, content, boardType, regDate }) => {
  return (
    <Box
      height="107px"
      width="704px"
      borderBottom="1px solid var(--line-02, #E8E8E8)"
      paddingTop="24px"
      margin="auto"
    >
      <Text fontSize="20px" fontWeight="500">
        {content}
      </Text>
      <Flex
        height="19px"
        marginTop="14px"
        fontSize="16px"
        color="var(--dg-03, #8E8E8E)"
        justifyContent="space-between"
      >
        <Flex height="100%" alignItems="center">
          <Text marginLeft="0px">{boardType}</Text>
          <Flex marginLeft="12px" />|<Flex marginLeft="12px" />
          <Text>{title}</Text>
        </Flex>
        <Flex height="100%" alignItems="center">
          <DateComponent date={regDate} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MyCommentPreview;
