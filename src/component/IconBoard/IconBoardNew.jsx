import Container from "../Util/Container";
import Header from "../Util/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import AlertModal from "./AlertModal";

const IconBoardNew = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgPreview, setImgPreview] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  const [board, setBoard] = useState({
    title: "",
    file: "",
    description: "",
  });

  const { title, file, description } = board;

  const onChangeHandler = (event) => {
    let { name, value } = event.target;

    if (name === "file") {
      value = event.target.files?.[0];
    }
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const fileHandler = (event) => {
    onChangeHandler(event);
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) setImgPreview(previewImgUrl);
    };
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (title.length < 2 || file === "" || title.length < 2) {
        setOpenAlert(true);
        return;
      }
      await axios.post(
        "https://42box.site/api/user-service/boards/icon-boards",
        board,
      );
      setOpenAlert(false);
      navigate("/icon/board");
    } catch (Error) {
      alert("post 실패"); // 임시
      // post 에러 처리
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <Header pageTitle="아이콘 게시판 글쓰기"></Header>
        <div className={`form-control ${title.length > 2 ? "" : "invalid"}`}>
          <input
            name="title"
            placeholder="제목을 입력하세요."
            onChange={onChangeHandler}
          ></input>
        </div>
        <input
          type="file"
          name="file"
          accept="image/png"
          onChange={fileHandler}
        />
        {imgPreview && (
          <img
            src={imgPreview}
            alt="preview"
            style={{ width: "200px", height: "200px" }}
          />
        )}
        <div
          className={`form-control ${description.length > 2 ? "" : "invalid"}`}
        >
          <textarea
            name="description"
            placeholder="내용을 입력하세요."
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button type="submit" onClick={onOpen}>
          등록
        </button>
      </Container>
      {openAlert === true && <AlertModal open={isOpen} close={onClose} />}
    </form>
  );
};

export default IconBoardNew;
