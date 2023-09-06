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
  const [selectedFile, setSelectedFile] = useState(null);

  const [editPostInfo, setEditPostInfo] = useState({
    title: "",
    content: "",
    scriptName: "",
    scriptPath: "",
  });
  const [title, setTitle] = useState(editPostInfo?.title);
  const [content, setContent] = useState(editPostInfo?.content);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const boardResponse = await apiCall(
          "GET",
          `/board-service/script-boards/${postId}`,
        );
        setTitle(boardResponse?.data?.title);
        setContent(boardResponse?.data?.content);
        setEditPostInfo(boardResponse.data);

        const fileResponse = await axios.get(
          `https://42box.kr/${boardResponse.data.scriptPath}`,
        );
        setSelectedFile(fileResponse.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

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

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!editPostInfo.scriptName) {
      alert("⚠️파일을 선택해주세요.⚠️");
      return;
    }

    try {
      console.log(editPostInfo);
      await apiCall("PUT", `/board-service/script-boards/${postId}`, {
        ...editPostInfo,
        title: title,
        content: content,
      });
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
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              borderColor="transparent"
              placeholder="제목을 입력하세요."
              _placeholder={{ color: "#C7C7C7" }}
              fontSize="32px"
              variant="unstyled"
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
                  : editPostInfo?.scriptName || "선택된 파일이 없습니다."}
              </Text>
            </Flex>
            <Box paddingTop="40px" />
            <Textarea
              value={content}
              height="700px"
              placeholder="본문 내용을 입력해 주세요."
              borderColor="transparent"
              onChange={(event) => {
                setContent(event.target.value);
              }}
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
            <ConfirmCancle onCancle={() => navigate("/script/board")} />
            <Flex paddingLeft="10px" />
            <BasicButton type="submit">등록</BasicButton>
          </Box>
        </form>
      </Box>
    </BackGround>
  );
};
