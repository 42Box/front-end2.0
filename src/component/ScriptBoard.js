import Header from "./Util/Header";
import RefreshButton from "./Util/Button/RefreshButton";
import WriteButton from "./Util/Button/WriteButton";

import TextPreview from "./TextPreview";

const ScriptBoard = () => {
  return (
    <div>
      <Header
        pageTitle="스크립트 게시판"
        leftButton={<RefreshButton />}
        rightButton={<WriteButton path="/boards/script-boards/write" />}
      ></Header>
      <TextPreview
        title="text title"
        author="jincpark"
        commentCount="10"
        upvotes="10"
        date="2023.2.23"
      ></TextPreview>
    </div>
  );
};

export default ScriptBoard;
