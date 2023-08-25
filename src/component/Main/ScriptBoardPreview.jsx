import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import moreIcon from "../../asset/more-bt.png";

const ScriptBoardPreview = () => {
  return (
    <Flex flexDirection="column" alignItems="stretch" padding="20px">
      <Link to={"/script/board"}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="10px"
        >
          <Heading
            color="#000"
            fontFamily="Inter"
            fontSize="24px"
            fontWeight={700}
            lineHeight="normal"
            textAlign="left"
          >
            스크립트
          </Heading>
          <Image src={moreIcon} alt="More Icon" boxSize="26px" />
        </Flex>
      </Link>
      <svg
        width="704"
        height="1"
        viewBox="0 0 704 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H703"
          stroke="#C7C7C7" // 직접 색상 값을 지정
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <Link to={"/script/board"}>
        <Flex
          className="board-container"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="704px"
          height="55px"
          flexShrink={0}
        >
          <Box marginBottom="10px">미리보기 1</Box>
          <Box marginBottom="10px">미리보기 2</Box>
          <Box>미리보기 3</Box>
        </Flex>
      </Link>
    </Flex>
  );
};

export default ScriptBoardPreview;
