import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import MainTextPreview from "./MainTextPreview";
import BoardPreviewTitle from "./MainPreviewTitle";

const ScriptBoardPreview = () => {
  return (
    <Flex flexDirection="column" alignItems="stretch" marginTop="50px">
      <BoardPreviewTitle title="스크립트" to="/script/board" />
      <Link to={"/script/board"}>
        <MainTextPreview></MainTextPreview>
        <MainTextPreview></MainTextPreview>
        <MainTextPreview></MainTextPreview>
      </Link>
    </Flex>
  );
};

export default ScriptBoardPreview;
