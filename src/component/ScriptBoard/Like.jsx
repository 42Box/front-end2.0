import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { ReactComponent as LikeIcon } from "../../asset/like.svg";
import apiCall from "../../util/apiCall";

export const Like = ({ postId, likeState, count }) => {
  const [isLiked, setIsLiked] = useState(likeState);

  const likeHandler = async () => {
    try {
      await apiCall("POST", "board-service/script-boards/likes", {
        boardId: postId,
        likeDislikeStatus: true,
      });
      setIsLiked(!isLiked);
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
      _hover={{
        background: isLiked ? "#FF9548" : "#E8E8E8",
      }}
    >
      <LikeIcon height="80%" />
      <Text marginLeft="2px" color="var(--dg-01, #9E9E9E)">
        {count}
      </Text>
    </Button>
  );
};
