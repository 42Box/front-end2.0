import { Box, Text, Flex } from "@chakra-ui/react";

import DateComponent from "../Util/DateComponent";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import IconAndCount from "../Util/IconAndCount";

const MyPagePostPreview = ({ title, comments, upvotes, date }) => {
  return (
    <Box
      height="107px"
      width="704px"
      borderBottom="1px solid var(--line-02, #E8E8E8)"
      paddingTop="24px"
      margin="auto"
    >
      <Text fontSize="20px" fontWeight="500">
        {title}
      </Text>
      <Flex
        height="19px"
        marginTop="14px"
        fontSize="16px"
        color="var(--dg-03, #8E8E8E)"
        justifyContent="space-between"
      >
        <Flex height="100%" alignItems="center">
          <Text marginLeft="0px">스크립트</Text>
          <Flex marginLeft="12px" />|<Flex marginLeft="12px" />
          <DateComponent date={date} />
        </Flex>
        <Flex height="100%" alignItems="center">
          <IconAndCount icon={<LikeIcon />} count={upvotes} />
          <IconAndCount icon={<MsgIcon />} count={comments} />
        </Flex>
      </Flex>
    </Box>
  );
};
export default MyPagePostPreview;
