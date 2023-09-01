import LittleHeader from "./LittleHeader";
import MyCommentList from "./MyCommentList";
import { Box } from "@chakra-ui/react";
import dummyComments from "../../dummyComments";

const MyComments = () => {
  return (
    <Box marginTop="91px" alignSelf="center">
      <LittleHeader title="내가 작성한 댓글" />
      <MyCommentList comments={dummyComments}></MyCommentList>
    </Box>
  );
};

export default MyComments;
