import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import MainTextPreview from "./MainTextPreview";
import BoardPreviewTitle from "./MainPreviewTitle";

const ServiceRegisterBoardPreview = () => {
  return (
    <Flex flexDirection="column" alignItems="stretch" marginTop="50px">
      <BoardPreviewTitle title="서비스 등록" to="/service-register/board" />
      <Link to={"/service-register/board"}>
        <MainTextPreview></MainTextPreview>
        <MainTextPreview></MainTextPreview>
        <MainTextPreview></MainTextPreview>
      </Link>
    </Flex>
  );
};

export default ServiceRegisterBoardPreview;
