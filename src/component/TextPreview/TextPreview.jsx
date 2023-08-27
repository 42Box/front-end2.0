import { Box, Text, Flex, Image } from "@chakra-ui/react";
import sampleProfileImage from "../../asset/sampleProfileImage.png";

import Date from "../Util/Date";
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
        오버워치 2: 침공이 출시되었습니다. 침공 배틀 패스를 통해 새로운 침공
        이야기 임무를 즐기고 최신 스킨, 꾸미기 아이템 보상을 획득하세요. 새로운
        핵심 PVP 게임 모드 플래시포인트와 신규 지원 영웅 일리아리...
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
          <Date date={date} />
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
