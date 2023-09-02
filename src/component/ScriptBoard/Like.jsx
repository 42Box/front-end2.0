import { useState } from "react";
import { Box } from "@chakra-ui/react";
import apiCall from "../../util/apiCall";

export const Like = ({ postId, likeState, children }) => {
  const [isLiked, setIsLiked] = useState(likeState);
  const [isHovering, setIsHovering] = useState(false);

  const likeHandler = async () => {
    try {
      await apiCall("POST", "board-service/script-boards/likes", {
        boardId: postId,
        likeDislikeStatus: true,
      });
      setIsLiked(!isLiked);
    } catch (error) {}
  };

  const getClassName = () => {
    if (isLiked) {
      return "liked";
    } else if (isHovering) {
      return "hovered";
    } else {
      return "default";
    }
  };

  return (
    <Box
      onClick={likeHandler}
      className={`like-box-${getClassName()}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </Box>
  );
};
