import { Box } from "@chakra-ui/react";
import LittleHeader from "./LittleHeader";
import MyPagePostList from "./MyPagePostList";

import dummyPosts from "../../dummyPosts";

const MyPosts = () => {
  return (
    <Box marginTop="51px" alignSelf="center">
      <LittleHeader title="내가 작성한 글" />
      <MyPagePostList posts={dummyPosts}></MyPagePostList>
    </Box>
  );
};

export default MyPosts;
