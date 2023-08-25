import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import BoardPreviewTitle from "./MainPreviewTitle";

const IconBoardPreview = () => {
  return (
    <Flex flexDirection="column" alignItems="stretch" marginTop="50px">
      <BoardPreviewTitle title="아이콘" to="/icon/board" />
      <Link to={"/icon/board"}>
        <Flex
          className="board-container"
          flexDirection="row" // 가로로 나열하기 위해 flex-direction을 row로 변경
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          flexShrink={0}
          marginTop="21px"
        >
          <Flex
            alt="미리보기 1"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"
          />
          <Flex
            alt="미리보기 2"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"
          />
          <Flex
            alt="미리보기 3"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"
          />
          <Flex
            alt="미리보기 4"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"
          />
          <Flex
            alt="미리보기 5"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"
          />
          <Flex
            alt="미리보기 6"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"
          />
          <Flex
            alt="미리보기 7"
            boxSize="90px"
            borderRadius="8px"
            background="#D9D9D9"
            marginRight="10px"

          />
        </Flex>
      </Link>
    </Flex>
  );
};

export default IconBoardPreview;
