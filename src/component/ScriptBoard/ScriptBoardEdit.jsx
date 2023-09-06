import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiCall from "../../util/apiCall";
import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import Header from "../Util/Header";
import FileSelectButton from "../Util/Button/FileSelectButton";
import ConfirmCancle from "../Util/Modal/confirmCancle";
import BasicButton from "../Util/Button/BasicButton";
import BackGround from "../Util/BackGround";

export const ScriptBoardEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // const [editPostInfo, setEditPostInfo] = useState({
  //   title: "",
  //   content: "",
  //   scriptName: "",
  //   // scriptUrl: "",
  // });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const boardResponse = await apiCall(
          "GET",
          `/board-service/script-boards/${postId}`,
        );
        setTitle(boardResponse.data.title);
        setContent(boardResponse.data.content);
        // setEditPostInfo(boardResponse.data);
        console.log(boardResponse.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
    // eslint-disable-next-line
  }, []);

  const getFormData = async () => {
    const formData = new FormData();
    // if (selectedFile) {
    formData.append("script-file", selectedFile);
    formData.append(
      "body",
      JSON.stringify({
        title: title,
        content: content,
        scriptName: selectedFile.name,
      }),
    );
    // } else {
    //   const fileResponse = await axios.get(editPostInfo.scriptUrl);
    //   // "https://42box.kr.s3.ap-northeast-2.amazonaws.com/script_file/8569c654-34eb-4def-8da9-8b415ac5d15e.sh"
    //   console.log(fileResponse.data);
    //   formData.append("script-file", fileResponse.data);
    //   formData.append(
    //     "body",
    //     JSON.stringify({
    //       title: title,
    //       content: content,
    //       scriptName: editPostInfo.scriptName,
    //     }),
    //   );
    // }
    return formData;
  };

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
  };

  const selectFileHandler = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
      fileInput.value = "";
    }
  };

  const validateForm = () => {
    if (
      title.length < 10 ||
      title.length > 40 ||
      content.length < 10 ||
      content.length > 5000 ||
      !selectedFile
    ) {
      return false;
    }
    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert(
        "⚠️글을 등록할 수 없습니다.⚠️\n파일이 첨부되었는지, 제목과 내용을 지정된 길이에 맞게 입력하였는지 확인해주세요.",
      );
      return;
    }
    try {
      await apiCall(
        "PUT",
        `/board-service/script-boards/${postId}`,
        getFormData(),
      );
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
                {selectedFile ? selectedFile.name : "선택된 파일이 없습니다."}
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
