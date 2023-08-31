import "./ScriptBoardNew.css";
import Header from "../Util/Header";
import Container from "../Util/Container";
import useScriptBoardNew from "../../hook/useScriptBoardNew";

const ScriptBoardNew = () => {
  const {
    inputTitle,
    setInputTitle,
    inputDetail,
    setInputDetail,
    selectedFile,
    setSelectedFile,
    postFormData,
  } = useScriptBoardNew();

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setInputDetail(event.target.value);
  };

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(inputTitle);
    console.log(inputDetail);
    if (
      inputTitle.length < 10 ||
      inputTitle.length > 50 ||
      inputDetail.length < 10 ||
      inputDetail.length > 5000 ||
      !selectedFile
    ) {
      alert(
        "⚠️글을 등록할 수 없습니다.⚠️\n파일이 첨부되었는지, 제목과 내용을 지정된 길이에 맞게 입력하였는지 확인해주세요."
      );
    } else {
      postFormData();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <Header pageTitle="스크립트 게시판 글쓰기"></Header>
        <div className={"form-control"}>
          <input
            placeholder="제목을 입력하세요."
            onChange={titleChangeHandler}
          ></input>
        </div>
        <input type="file" onChange={fileChangeHandler} />
        {selectedFile && <span>{selectedFile.name}</span>}
        <div className={"form-control"}>
          <textarea
            placeholder="내용을 입력하세요."
            onChange={detailChangeHandler}
          ></textarea>
        </div>
        <button type="submit">등록</button>
      </Container>
    </form>
  );
};

export default ScriptBoardNew;
