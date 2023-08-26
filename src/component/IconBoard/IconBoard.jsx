import "./IconBoard.css";

import Container from "../Util/Container";
import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import IconGallaryView from "./IconGalleryView";

const IconBoard = () => {
  return (
    <Container>
      <Header
        pageTitle="아이콘 게시판"
        rightButton={<WriteButton path="/icon/new" />}
      />
      <IconGallaryView />
    </Container>
  );
};

export default IconBoard;
