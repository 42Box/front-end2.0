import { Button, Text, Flex } from "@chakra-ui/react";
import { ReactComponent as LikeIcon } from "../../../asset/content-view-like.svg";
import { ReactComponent as LikeClickedIcon } from "../../../asset/content-view-like-clicked.svg";
import apiCall from "../../../util/apiCall";
import { loginState } from "../../../recoil/states";
import { useRecoilValue } from "recoil";

export const LikeButton = ({
  boardType,
  postId,
  likeState,
  count,
  onRender,
}) => {
  const isLogin = useRecoilValue(loginState);

  const likeHandler = async () => {
    if (!isLogin) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }

    try {
      await apiCall("POST", `board-service/${boardType}/likes`, {
        boardId: postId,
        likeDislikeStatus: likeState ? true : false,
      });
      onRender();
    } catch (error) {}
  };

  return (
    <Button
      onClick={likeHandler}
      paddingLeft="5px"
      paddingRight="10px"
      height="30px"
      borderRadius="25px"
      bg="transparent"
      border="none"
      _hover={{ background: "#E8E8E8" }}
      background={likeState ? "#FF9548" : ""}
      alignItems="center"
    >
      {likeState ? <LikeClickedIcon /> : <LikeIcon />}
      <Flex paddingRight="3px" />
      <Text
        fontSize="22px"
        height="27px"
        margin={0}
        color={likeState ? "#FFF0E5" : "#5B5B5B"}
      >
        {count}
      </Text>
    </Button>
  );
};
