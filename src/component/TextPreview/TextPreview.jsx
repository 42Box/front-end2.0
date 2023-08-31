import { Box, Text, Flex, Image } from "@chakra-ui/react";
import sampleProfileImage from "../../asset/sampleProfileImage.png";

import DateComponent from "../Util/DateComponent";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import IconAndCount from "../Util/IconAndCount";

const TextPreview = ({ title, content, author, comments, upvotes, date }) => {
  return (
    <Box
      height="191px"
      width="704px"
      borderBottom="1px solid var(--line-02, #E8E8E8)"
      paddingTop="32px"
      margin="auto"
    >
      <Text fontSize="20px" fontWeight="500">
        {title}
      </Text>
      <Text fontSize="16px" color="var(--dg-04, #5B5B5B)" marginTop="16px">
        {content}
      </Text>
      <Flex
        alignItems="center"
        height="23px"
        marginTop="16px"
        fontSize="16px"
        color="var(--dg-03, #8E8E8E)"
        justifyContent="space-between"
      >
        <Flex height="100%">
          <Image src={sampleProfileImage} width="23px" height="23px" />
          <Text marginLeft="8px">{author}</Text>
          <Flex marginLeft="12px" />|<Flex marginLeft="12px" />
          <DateComponent date={date} />
        </Flex>
        <Flex height="100%">
          <IconAndCount icon={<LikeIcon />} count={upvotes} />
          <IconAndCount icon={<MsgIcon />} count={comments} />
        </Flex>
      </Flex>
    </Box>
  );
};
export default TextPreview;
