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
  const gifs = [runningFox, foxTail, box42, flip42, gon, gun, gam, lee];
  const gifs_string = [
    "fox",
    "sitting_fox",
    "box",
    "42",
    "gon",
    "gun",
    "gam",
    "lee",
  ];

  const [isRunningFoxHovered, setIsRunningFoxHovered] = useState(false); // 호버 상태 저장

  const onClickHandler = async (index) => {
    try {
      const icon = gifs_string[index];
      console.log(icon + " icon selected.");
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
          onClick={() => onClickHandler(0)}
          cursor="pointer"
          _hover={{
            transform: "translateX(650px)",
            transition: "transform 5s",
          }}
          onMouseEnter={() => setIsRunningFoxHovered(true)}
          onMouseLeave={() => setIsRunningFoxHovered(false)}
          style={{ zIndex: isRunningFoxHovered ? "2" : "auto" }}
          height="100%"
          objsetFit="contain"
        />
        <Flex
          height="100%"
          justifyContent="space-between"
          width="85%"
          style={{
            filter: isRunningFoxHovered ? "blur(20px)" : "none",
            transition: "filter 0.3s, opacity 0.3s", // transition 추가
            zIndex: isRunningFoxHovered ? "1" : "auto",
            opacity: isRunningFoxHovered ? 0 : 1, // opacity를 추가
          }}
        >
          {gifs.slice(1).map((gif, index) => {
            return (
              <Image
                src={gif}
                key={index}
                objsetFit="contain"
                height="100%"
                onClick={() => onClickHandler(index + 1)}
                cursor="pointer"
                _hover={{
                  transform: "scale(1.5)",
                  transition: "transform 0.3s",
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default IconBoardPreview;
