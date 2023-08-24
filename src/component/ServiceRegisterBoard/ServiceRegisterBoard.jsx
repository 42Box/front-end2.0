import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import Container from "../Util/Container";

import TextPreviewList from "../TextPreview/TextPreviewList";
import dummyRegisters from "../../dummyRegisters";
import "./ServiceRegisterBoard.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ServiceRegisterBoard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        pageTitle="서비스 등록 게시판"
        leftButton={<AiOutlineArrowLeft onClick={() => navigate(-1)} />}
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
