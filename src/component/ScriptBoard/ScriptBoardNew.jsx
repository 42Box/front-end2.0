import Header from "../Util/Header";
import useScriptBoardNew from "../../hook/useScriptBoardNew";
import BackGround from "../Util/BackGround";
import { Input, Textarea, Box, Button } from "@chakra-ui/react";
import FileSelectButton from "../Util/Button/FileSelectButton";

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

  const selectFileHandler = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const validateForm = () => {
    if (
      inputTitle.length < 10 ||
      inputTitle.length > 40 ||
      inputDetail.length < 10 ||
      inputDetail.length > 5000 ||
      !selectedFile
    ) {
      return false;
    }
    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      postFormData();
    } else {
      alert(
        "⚠️글을 등록할 수 없습니다.⚠️\n파일이 첨부되었는지, 제목과 내용을 지정된 길이에 맞게 입력하였는지 확인해주세요."
      );
    }
  };

  return (
    <BackGround>
      <Header pageTitle="스크립트"></Header>
      <Box width="704px" alignSelf="center">
        <form onSubmit={submitHandler}>
          <Box paddingTop="36px" />
          <Box height="926px" borderBottom="1px solid #C7C7C7">
            <Input
              onChange={titleChangeHandler}
              borderColor="transparent"
              placeholder="제목을 입력하세요."
              _placeholder={{ color: "#C7C7C7" }}
              fontSize="32px"
              variant="unstyled"
            />
            <Box paddingTop="36px" />
            <Box
              height="48px"
              borderRadius="12px"
              border="1px solid #C7C7C7"
              alignItems="center"
              paddingLeft="12px"
            >
              <FileSelectButton
                onClick={selectFileHandler}
                accept="application/x-sh"
                onFileChange={fileChangeHandler}
                selectedFile={selectedFile}
              />
            </Box>
            <Box paddingTop="40px" />
            <Textarea
              height="700px"
              placeholder="본문 내용을 입력해 주세요."
              borderColor="transparent"
              onChange={detailChangeHandler}
              fontSize="22px"
              variant="unstyled"
              sx={{
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "transparent",
                },
              }}
            ></Textarea>
          </Box>
          <Box paddingTop="15px" />
          <Box display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              borderRadius="20px"
              border="1px solid #8E8E8E"
              backgroundColor="transparent"
              color="#8E8E8E"
              _hover={{
                border: "1.5px solid var(--Main-Orange, #FF9548)",
                background: "var(--Light-Orange, #FFF0E5)",
                color: "#FF9548",
              }}
            >
              등록
            </Button>
          </Box>
        </form>
      </Box>
    </BackGround>
  );
};

export default ScriptBoardNew;
