import useApi from "../hook/useApi";

import Header from "./Util/Header";
import RefreshButton from "./Util/Button/RefreshButton";
import WriteButton from "./Util/Button/WriteButton";
import Container from "./Util/Container";

import TextPreviewList from "./TextPreviewList";
import dummyPosts from "../dummyPosts";

const ScriptBoard = () => {
  const apiHook = useApi("GET", "", "");

  const buttonHandler = () => {
    apiHook((response) => {
      console.log(response);
    });
  };

  return (
    <Container>
      <button onClick={buttonHandler}>NAVER</button>
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/boards/script-boards/new" />}
      ></Header>
      <TextPreviewList posts={dummyPosts} />
    </Container>
  );
};

export default ScriptBoard;
