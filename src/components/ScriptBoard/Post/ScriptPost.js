import "./ScriptPost.css";

import Container from "../../UI/Container";
import TopNav from "../../UI/TopNav";
import Button from "../../UI/Button";

const ScriptPost = (props) => {
  return (
    <Container>
      <TopNav>
        <Button onClick={props.onCancleButton}>뒤로가기</Button>
        <h1>스크립트 게시판</h1>
      </TopNav>
    </Container>
  );
};

export default ScriptPost;
