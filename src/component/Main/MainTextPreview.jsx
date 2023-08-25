import { Text, Flex } from "@chakra-ui/react";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import { ReactComponent as MsgIcon } from "../../asset/message.svg";
import IconAndCount from "./LikeAndComment";

const MainTextPreview = () => {
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
        낭만이란 배를 타고 떠나갈거야
      </Text>
      <Flex width="100px" justifyContent="space-between">
        <IconAndCount icon={<LikeIcon />} count="12" />
        <IconAndCount icon={<MsgIcon />} count="7" />
      </Flex>
    </Flex>
  );
};

export default MainTextPreview;
