import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../util/apiCall";
import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import Header from "../Util/Header";
import FileSelectButton from "../Util/Button/FileSelectButton";
import ConfirmCancle from "../Util/Modal/confirmCancle";
import BasicButton from "../Util/Button/BasicButton";
import BackGround from "../Util/BackGround";
import axios from "axios";

export const ScriptBoardEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [oldFile, setOldFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
    scriptName: "",
    scriptPath: "",
    scriptUrl: "",
  });

  useEffect(() => {
    async function fetchPost() {
      try {
        const boardResponse = await apiCall(
          "GET",
          `/board-service/script-boards/${postId}`,
        );
        setPostInfo({
          title: boardResponse.data.title,
          content: boardResponse.data.content,
          scriptName: boardResponse.data.scriptName,
          scriptPath: boardResponse.data.scriptPath,
          scriptUrl: boardResponse.data.scriptUrl,
        });
        console.log("script path: ", boardResponse.data.scriptPath);
        const fileResponse = await axios.get(
          `https://42box.kr/${boardResponse.data.scriptPath}`,
        );
        const file = fileResponse.data;
        console.log("PAST file api call: ", file);
        setOldFile(file);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
    // eslint-disable-next-line
  }, []);

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const selectFileHandler = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
      fileInput.value = "";
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setPostInfo({
      ...postInfo,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await apiCall("PUT", `/board-service/script-boards/${postId}}`, postInfo);
      navigate(`/script/content/${postId}`);
    } catch (error) {
      alert(
        "⚠️글을 등록할 수 없습니다.⚠️\n파일이 첨부되었는지, 제목과 내용을 지정된 길이에 맞게 입력하였는지 확인해주세요.",
      );
    }
  };

  return (
    <BackGround>
      <Header pageTitle="스크립트" allowNavigate={false}></Header>
      <Box width="704px" alignSelf="center">
        <form onSubmit={submitHandler}>
          <Box paddingTop="36px" />
          <Box height="926px" borderBottom="1px solid #C7C7C7">
            <Input
              onChange={inputChangeHandler}
              borderColor="transparent"
              placeholder="제목을 입력하세요."
              _placeholder={{ color: "#C7C7C7" }}
              fontSize="32px"
              variant="unstyled"
              value={postInfo.title}
            />
            <Box paddingTop="36px" />
            <Flex
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
              <Flex paddingLeft="15px" />
              <Text
                fontSize="18px"
                color="gray"
                _hover={selectedFile ? { color: "#FF7070" } : {}}
                onClick={() => setSelectedFile(null)}
              >
                {selectedFile
                  ? selectedFile.name
                  : oldFile
                  ? postInfo?.scriptName
                  : "선택된 파일이 없습니다."}
              </Text>
            </Flex>
            <Box paddingTop="40px" />
            <Textarea
              height="700px"
              placeholder="본문 내용을 입력해 주세요."
              borderColor="transparent"
              onChange={inputChangeHandler}
              fontSize="22px"
              variant="unstyled"
              value={postInfo.content}
              sx={{
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "transparent",
                },
              }}
            ></Textarea>
          </Box>
          <Box paddingTop="15px" />
          <Box display="flex" justifyContent="flex-end">
            <ConfirmCancle onCancle={() => navigate("/script/board")} />
            <Flex paddingLeft="10px" />
            <BasicButton type="submit">등록</BasicButton>
          </Box>
        </form>
      </Box>
    </BackGround>
  );
};
