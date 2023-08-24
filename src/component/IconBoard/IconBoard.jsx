import "./IconBoard.css";

import Container from "../Util/Container";
import Header from "../Util/Header";
import RefreshButton from "../Util/Button/RefreshButton";
import WriteButton from "../Util/Button/WriteButton";
import IconGallaryView from "./IconGalleryView";

const IconBoard = () => {
  return (
    <Container>
      <Header
        pageTitle="이모티콘 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/script/new" />}
      />
      <IconGallaryView />
    </Container>
  );
};

export default IconBoard;
