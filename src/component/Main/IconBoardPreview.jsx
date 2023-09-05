import { Box, Flex, Image } from "@chakra-ui/react";
import BoardPreviewTitle from "./MainPreviewTitle";
import apiCall from "../../util/apiCall";
const IconBoardPreview = () => {
  const onClickHandler = async (icon) => {
    try {
      await apiCall("PUT", "https://api.42box.kr/user-service/users/me/icon", {
        icon: icon,
      });
      window?.webkit?.messageHandlers?.icon.postMessage(icon);
    } catch (error) {
      console.error("Error changing icon:", error);
    }
  };

  return (
    <Flex flexDirection="column" alignItems="stretch" marginTop="50px">
      <BoardPreviewTitle title="아이콘" to="/icon/board" />
      <Flex
        flexDirection="row" // 가로로 나열하기 위해 flex-direction을 row로 변경
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        // flexShrink={0}
        marginTop="21px"
        gap="20px"
      >
        <Box
          alt="미리보기 1"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          marginRight="10px"
          onClick={() => onClickHandler("fox")}
          flex="1"
          style={{ overflow: "hidden" }}
          _hover={{ background: "#DDDDDD" }}
        >
          <Image
            width="100%" // 이미지 크기 100%로 설정
            height="100%" // 이미지 크기 100%로 설정
            objectFit="contain" // 이미지 비율 유지
            src={process.env.PUBLIC_URL + "/fox2.png"}
            alt={"fox"}
          />
        </Box>
        <Box
          alt="미리보기 2"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          marginRight="10px"
          onClick={() => onClickHandler("box")}
          flex="1"
          style={{ overflow: "hidden" }}
          _hover={{ background: "#DDDDDD" }}
        >
          <Image
            width="100%"
            height="100%"
            objectFit="contain"
            src={process.env.PUBLIC_URL + "/42box_4.png"}
            alt={"box"}
          />
        </Box>
        <Box
          alt="미리보기 3"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          marginRight="10px"
          onClick={() => onClickHandler("42")}
          flex="1"
          style={{ overflow: "hidden" }}
          _hover={{ background: "#DDDDDD" }}
        >
          <Image
            width="100%"
            height="100%"
            objectFit="contain"
            src={process.env.PUBLIC_URL + "/42flip_01.png"}
            alt={"42"}
          />
        </Box>
        <Box
          alt="미리보기 4"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          boarder="1.5px solid #000"
          marginRight="10px"
        />
        <Box
          alt="미리보기 4"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          boarder="1.5px solid #000"
          marginRight="10px"
        />
        <Box
          alt="미리보기 4"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          boarder="1.5px solid #000"
          marginRight="10px"
        />
        <Box
          alt="미리보기 4"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          boarder="1.5px solid #000"
          marginRight="10px"
        />
        <Box
          alt="미리보기 4"
          boxSize="50px"
          borderRadius="8px"
          background="none"
          boarder="1.5px solid #000"
          marginRight="10px"
        />
      </Flex>
    </Flex>
  );
};

export default IconBoardPreview;
