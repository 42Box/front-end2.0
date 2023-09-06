import Header from "../Util/Header";
import useServiceBoardNew from "../../hook/useServiceBoardNew";
import BackGround from "../Util/BackGround";
import { Input, Text, Textarea, Box, Flex } from "@chakra-ui/react";
import FileSelectButton from "../Util/Button/FileSelectButton";
import { useNavigate } from "react-router-dom";
import ConfirmCancle from "../Util/Modal/confirmCancle";
import BasicButton from "../Util/Button/BasicButton";
import isUrlValid from "../../util/isUrlValid";
import { loginState } from "../../recoil/states";
import { useRecoilValue } from "recoil";
import WrongApproach from "../Util/WrongApproach";

const ServiceBoardNew = () => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(loginState);
  const {
    inputTitle,
    setInputTitle,
    inputDetail,
    setInputDetail,
    inputServiceUrl,
    setInputServiceUrl,
    inputServiceName,
    setInputServiceName,
    selectedImage,
    setSelectedImage,
    postFormData,
  } = useServiceBoardNew();

  if (!isLogin) {
    return <WrongApproach />;
  }

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setInputDetail(event.target.value);
  };

  const serviceUrlChangeHandler = (event) => {
    setInputServiceUrl(event.target.value);
  };

  const serviceNameChangeHandler = (event) => {
    setInputServiceName(event.target.value);
  };

  const imageChangeHandler = (event) => {
    if (event.target.files[0].size > 1024 * 1000) {
      alert("이미지 크기 제한을 초과하였습니다(최대 2MB).");
      return;
    }
    setSelectedImage(event.target.files[0]);
  };

  const selectImageHandler = () => {
    const imageInput = document.getElementById("fileInput");
    if (imageInput) {
      imageInput.click();
      imageInput.value = "";
    }
  };

  const validateForm = () => {
    if (
      inputTitle.length < 10 ||
      inputTitle.length > 40 ||
      inputDetail.length < 10 ||
      inputDetail.length > 5000 ||
      inputServiceName.length === 0 ||
      !isUrlValid(inputServiceUrl)
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

  const cancleWriteHandler = () => {
    navigate("/service/board");
  };

  return (
    <BackGround>
      <Header pageTitle="서비스 등록" allowNavigate={false}></Header>
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
            <Flex
              height="48px"
              borderRadius="12px"
              border="1px solid #C7C7C7"
              alignItems="center"
              paddingLeft="12px"
            >
              <FileSelectButton
                onClick={selectImageHandler}
                accept="image/png"
                onFileChange={imageChangeHandler}
                selectedFile={selectedImage}
              />
              <Flex paddingLeft="15px" />
              <Text
                fontSize="18px"
                color="gray"
                _hover={selectedImage ? { color: "#FF7070" } : {}}
                onClick={() => setSelectedImage(null)}
              >
                {selectedImage ? selectedImage.name : "선택된 파일이 없습니다."}
              </Text>
            </Flex>
            <Box paddingTop="40px" />
            <Input
              onChange={serviceNameChangeHandler}
              height="48px"
              borderRadius="12px"
              border="1px solid #C7C7C7"
              alignItems="center"
              paddingLeft="12px"
              placeholder="서비스 명을 입력하세요."
              _hover={{ border: "1px solid #FF9548" }}
              focusBorderColor="#FF9548"
            />
            <Box paddingTop="20px" />
            <Input
              onChange={serviceUrlChangeHandler}
              height="48px"
              borderRadius="12px"
              border="1px solid #C7C7C7"
              alignItems="center"
              paddingLeft="12px"
              placeholder="https://example.com"
              _hover={{ border: "1px solid #FF9548" }}
              focusBorderColor="#FF9548"
            />
            <Box paddingTop="20px" />
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
            <ConfirmCancle onCancle={cancleWriteHandler} />
            <Flex paddingLeft="10px" />
            <BasicButton type="submit">등록</BasicButton>
          </Box>
        </form>
      </Box>
    </BackGround>
  );
};

export default ServiceBoardNew;
