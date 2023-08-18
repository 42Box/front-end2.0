import Header from "./Util/Header";
import RefreshButton from "./Util/Button/RefreshButton";
import WriteButton from "./Util/Button/WriteButton";
import Card from "./Util/Card";

const ScriptBoard = () => {
  return (
    <div>
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/boards/script-boards/write" />}
      />
      <Card />
    </div>
  );
};

export default ScriptBoard;
