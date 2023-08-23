import Header from "../Util/Header";
import RefreshButton from "../Util/Button/RefreshButton";
import WriteButton from "../Util/Button/WriteButton";
import Container from "../Util/Container";

import TextPreviewList from "../TextPreview/TextPreviewList";
import dummyRegisters from "../../dummyRegisters";
import "./ServiceRegisterBoard.css";

const ServiceRegisterBoard = () => {
  return (
    <Container>
      <Header
        pageTitle="서비스 등록 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/boards/script-boards/new" />}
      />
      <TextPreviewList
        to="/boards/service-register-boards"
        posts={dummyRegisters}
      />
    </Container>
  );
};

export default ServiceRegisterBoard;