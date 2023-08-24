import "./IconBoard.css";

import Container from "../Util/Container";
import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import IconGallaryView from "./IconGalleryView";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const IconBoard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        pageTitle="이모티콘 게시판"
        leftButton={<AiOutlineArrowLeft onClick={() => navigate(-1)} />}
        rightButton={<WriteButton path="/boards/script-boards/new" />}
      />
      <IconGallaryView />
    </Container>
  );
};

export default IconBoard;
