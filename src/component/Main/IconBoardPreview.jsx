import { Link } from "react-router-dom";
import { Flex, Heading, Image } from "@chakra-ui/react";
import moreIcon from "../../asset/more-bt.png";
import previewImage from "../../asset/box.jpeg"; // 이미지 경로들을 적절히 수정해야 합니다.

const IconBoardPreview = () => {
  return (
    <Flex flexDirection="column" alignItems="stretch" padding="20px">
      <Link to={"/icon/board"}>
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
            아이콘
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
      <Link to={"/icon/board"}>
        <Flex
          className="board-container"
          flexDirection="row" // 가로로 나열하기 위해 flex-direction을 row로 변경
          justifyContent="flex-start"
          alignItems="center"
          width="704px"
          height="90px"
          flexShrink={0}
        >
          <Image
            src={previewImage}
            alt="미리보기 1"
            boxSize="90px" // 이미지 크기 수정
            borderRadius="8px" // 이미지 테두리 설정
            background="#FFFFFF" // 이미지 배경색 설정
            marginRight="10px"
          />
          <Image
            src={previewImage}
            alt="미리보기 2"
            boxSize="90px" // 이미지 크기 수정
            borderRadius="8px" // 이미지 테두리 설정
            background="#FFFFFF" // 이미지 배경색 설정
            marginRight="10px"
          />
          <Image
            src={previewImage}
            alt="미리보기 3"
            boxSize="90px" // 이미지 크기 수정
            borderRadius="8px" // 이미지 테두리 설정
            background="#FFFFFF" // 이미지 배경색 설정
          />
        </Flex>
      </Link>
    </Flex>
  );
};

export default IconBoardPreview;
