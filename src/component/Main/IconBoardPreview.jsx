import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import BoardPreviewTitle from "./MainPreviewTitle";
const IconBoardPreview = () => {
  const onClickHandler = async (icon) => {
    try {
      await window.webkit.messageHandlers.icon.postMessage(icon);
      // 추후 성공 모달("아이콘이 바뀌었습니다")
    } catch (error) {
      console.error("Error changing icon:", error);
      // 추후 실패 모달
    }
  };

  return (
    <Flex flexDirection="column" alignItems="stretch" marginTop="50px">
      <BoardPreviewTitle title="아이콘" to="/icon/board" />
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
          onClick={() => onClickHandler("fox")}
        >
          <img
            src={process.env.PUBLIC_URL + "/fox2.png"}
            width="200px"
            alt={"fox"}
          />
        </Flex>
        <Flex
          alt="미리보기 2"
          boxSize="90px"
          borderRadius="8px"
          background="#D9D9D9"
          marginRight="10px"
          onClick={() => onClickHandler("box")}
        >
          <img
            src={process.env.PUBLIC_URL + "/42box_4.png"}
            width="200px"
            alt={"box"}
          />
        </Flex>
        <Flex
          alt="미리보기 3"
          boxSize="90px"
          borderRadius="8px"
          background="#D9D9D9"
          marginRight="10px"
          onClick={() => onClickHandler("42")}
        >
          <img
            src={process.env.PUBLIC_URL + "/42flip_01.png"}
            width="200px"
            alt={"42"}
          />
        </Flex>
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
    </Flex>
  );
};

export default IconBoardPreview;
