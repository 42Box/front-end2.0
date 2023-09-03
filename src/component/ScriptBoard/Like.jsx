import { Button, Text } from "@chakra-ui/react";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import apiCall from "../../util/apiCall";

export const Like = ({ postId, likeState, count, onRender }) => {
  const likeHandler = async () => {
    try {
      await apiCall("POST", "board-service/script-boards/likes", {
        boardId: postId,
        likeDislikeStatus: likeState ? true : false,
      });
      onRender();
    } catch (error) {}
  };

  return (
    <Button
      onClick={likeHandler}
      minWidth="55px"
      height="30px"
      padding="0px 1px"
      rounded="15px"
      bg="transparent"
      gap="3px"
      background={likeState ? "#FF9548" : "#E8E8E8"}
    >
      <LikeIcon height="80%" />
      <Text marginLeft="2px" color="var(--dg-01, #9E9E9E)">
        {count}
      </Text>
    </Button>
  );
};
