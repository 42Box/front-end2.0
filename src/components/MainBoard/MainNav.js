import Button from "../UI/Button";
import TopNav from "../UI/TopNav";

const MainNav = (props) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <TopNav>
      <Button onClick={handleRefresh}>새로고침</Button>
      <h1>스크립트 게시판</h1>
      <Button onClick={props.onWriteButton}>글쓰기</Button>
    </TopNav>
  );
};

export default MainNav;
