import { Box, Text, Flex, Image } from "@chakra-ui/react";

import DateComponent from "../Util/DateComponent";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import IconAndCount from "../Util/IconAndCount";

const TextPreview = ({
  profileImagePath,
  title,
  content,
  author,
  comments,
  upvotes,
  date,
}) => {
  if (content.length >= 50) {
    content = content.substr(0, 50) + "...";
  }

  return (
    <Box
      height="175px"
      width="704px"
      borderBottom="1px solid var(--line-02, #E8E8E8)"
      margin="auto"
    >
      <Box paddingTop="32px" />
      <Text fontSize="20px" fontWeight="500" margin={0}>
        {title}
      </Text>
      <Box paddingTop="16px" />
      <Text fontSize="16px" color="var(--dg-04, #5B5B5B)" margin={0}>
        {content}
      </Text>
      <Box paddingTop="18px" />
      <Flex
        height="23px"
        color="var(--dg-03, #8E8E8E)"
        justifyContent="space-between"
      >
        <Flex height="100%" alignItems="center">
          <Image
            src={`https://42box.kr/${profileImagePath}`}
            width="23px"
            height="23px"
          />
          <Text fontSize="16px" marginLeft="8px">
            {author}
          </Text>
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
