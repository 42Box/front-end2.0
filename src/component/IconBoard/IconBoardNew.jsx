import Container from "../Util/Container";
import Header from "../Util/Header";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import AlertModal from "./AlertModal";
import ImagePreviewItem from "./ImgPreviewItem";

const IconBoardNew = () => {
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgPreview, setImgPreview] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  const [board, setBoard] = useState({
    title: "",
    file: [],
    description: "",
  });

  const { title, file, description } = board;

  const onChangeHandler = (event) => {
    let { name, value } = event.target;

    if (name === "file") {
      const newFiles = [...board.file, ...event.target.files];
      setBoard({
        ...board,
        [name]: newFiles,
      });
    } else {
      setBoard({
        ...board,
        [name]: value,
      });
    }
  };

  const fileInputClick = () => {
    fileInput.current.click();
  };

  const fileHandler = (event) => {
    onChangeHandler(event);
    const files = Array.from(event.target.files);

    console.log(files);
    if (files && files.length > 0) {
      const reader = new FileReader();

      // 파일 여러개 처리
      files.forEach((f) => {
        reader.readAsDataURL(f);

        reader.onloadend = () => {
          const previewImgUrl = reader.result;
          if (previewImgUrl) setImgPreview([...imgPreview, previewImgUrl]);
          event.target.value = ""; // 지웠다가 다시 똑같은걸 올릴 때 필요.
        };
      });
    }
  };

  const deleteFileHandler = (index) => {
    const newFiles = file.filter((f, idx) => idx !== index);
    const newImgPreview = imgPreview.filter((f, idx) => idx !== index);

    setBoard({
      ...board,
      file: [...newFiles],
    });
    setImgPreview([...newImgPreview]);
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
        <Box>
          <Button colorScheme="orange" size="sm" onClick={fileInputClick}>
            ﹢ 파일 선택
          </Button>
          <input
            type="file"
            name="file" // name이 위에서 쓰임. 꼭 필요
            accept="image/png"
            hidden={true}
            ref={fileInput}
            onChange={fileHandler}
          />
        </Box>
        <div style={{ display: "flex" }}>
          {imgPreview &&
            imgPreview.length > 0 &&
            imgPreview.map((img, index) => (
              <ImagePreviewItem
                key={index}
                img={img}
                index={index}
                onDelete={deleteFileHandler}
              />
            ))}
        </div>
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
