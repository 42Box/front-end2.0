import { Text, Flex } from "@chakra-ui/react";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import IconAndCount from "../Util/IconAndCount";

const MainTextPreview = ({ title, likeCount, commentCount }) => {
  return (
    <Flex
      width="704px"
      height="55px"
      flexShrink="0"
      borderBottom="1px solid #E7E7E7"
      alignItems="center"
      boxSizing="border-box"
      justifyContent="space-between"
    >
      <Text fontSize="16px" fontWeight="525">
        {title}
      </Text>
      <Flex width="100px" justifyContent="space-between">
        <IconAndCount icon={<LikeIcon />} count={likeCount} />
        <IconAndCount icon={<MsgIcon />} count={commentCount} />
      </Flex>
    </Flex>
  );
};

export default MainTextPreview;
