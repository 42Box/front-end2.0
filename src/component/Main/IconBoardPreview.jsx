import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react"; // useState 추가
import BoardPreviewTitle from "./MainPreviewTitle";
import apiCall from "../../util/apiCall";
import box42 from "../../asset/42box.gif";
import flip42 from "../../asset/42filp.gif";
import gam from "../../asset/42gam.gif";
import gon from "../../asset/42gon.gif";
import gun from "../../asset/42gun.gif";
import lee from "../../asset/42lee.gif";
import foxTail from "../../asset/foxtail.gif";
import runningFox from "../../asset/running-fox.gif";

const IconBoardPreview = () => {
  const gifs = [foxTail, box42, flip42, gun, gon, gam, lee];

  const [isRunningFoxHovered, setIsRunningFoxHovered] = useState(false); // 호버 상태 저장

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
    <>
      <Box paddingTop="40px" />
      <BoardPreviewTitle title="아이콘 변경" to="/icon/board" />
      <Flex justifyContent="space-between" marginTop="20px" height="40px">
        <Image
          src={runningFox}
          onClick={() => onClickHandler(runningFox)}
          cursor="pointer"
          _hover={{
            transform: "translateX(650px)",
            transition: "transform 5s",
          }}
          onMouseEnter={() => setIsRunningFoxHovered(true)} // 호버 인 상태 변경
          onMouseLeave={() => setIsRunningFoxHovered(false)} // 호버 아웃 상태 변경
          style={{ zIndex: isRunningFoxHovered ? "2" : "auto" }} // 스택 순서 설정
        />
        {gifs.map((gif, index) => {
          return (
            <Image
              src={gif}
              key={index}
              onClick={() => onClickHandler(gif)}
              cursor="pointer"
              style={{
                filter: isRunningFoxHovered ? "blur(10px)" : "none", // 블러 효과 조건부 설정
                transition: "filter 0.3s", // 필터 애니메이션 지속 시간
                zIndex: isRunningFoxHovered ? "1" : "auto", // 스택 순서 설정
              }}
              _hover={{
                transform: "scale(1.5)",
                transition: "transform 0.3s",
              }}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default IconBoardPreview;
