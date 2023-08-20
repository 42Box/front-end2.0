import Header from "./Util/Header";
import RefreshButton from "./Util/Button/RefreshButton";
import WriteButton from "./Util/Button/WriteButton";

import TextPreviewList from "./TextPreviewList";
import dummyPosts from "../dummyPosts";

const ScriptBoard = () => {
  return (
    <div>
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/boards/script-boards/new" />}
      ></Header>
      <TextPreviewList posts={dummyPosts} />
    </div>
  );
};

export default ScriptBoard;
