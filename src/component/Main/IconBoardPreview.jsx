import { Box, Flex, Image } from "@chakra-ui/react";
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
  const gifs = [runningFox, foxTail, box42, flip42, gun, gon, gam, lee];

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
      <Flex justifyContent="space-between" marginTop="20px">
        {gifs.map((gif, index) => {
          return (
            <Image
              src={gif}
              key={index}
              width="45px"
              height="45px"
              onClick={() => onClickHandler(gif)}
              cursor="pointer"
              _hover={{ transform: "scale(1.5)", transition: "transform 0.3s" }}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default IconBoardPreview;
