import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

export const ScriptPreviewPop = ({
  postInfo,
  isPreviewOn,
  setIsPreviewOn,
  previewHandler,
  triggerButton,
  errorHandler,
  children,
}) => {
  const [filePreview, setFilePreview] = useState(""); // 로컬 상태로 파일 미리보기 관리

  useEffect(() => {
    const readFileHandler = async () => {
      try {
        const response = await axios.get(
          `https://42box.kr/${postInfo.scriptPath}`,
        );
        const file = response.data;
        setFilePreview(file);
      } catch (error) {
        errorHandler(error.response);
      }
    };

    if (isPreviewOn) readFileHandler();
    // eslint-disable-next-line
  }, [isPreviewOn]);

  return (
    <Box>
      <Button
        width="146px"
        height="33px"
        padding="6px 10px 6px 10px"
        margin="16px 0 0"
        marginLeft="10%"
        border="1.5px solid #000"
        rounded="full"
        gap="2px"
        background="transparent"
        onClick={() => previewHandler()}
        disabled={true}
      >
        {isPreviewOn ? "스크립트 닫기 " : "스크립트 미리보기"}
      </Button>
      {isPreviewOn && (
        <Container
          width="70%"
          maxWidth="768px"
          margin="0 auto"
          padding="3"
          borderWidth="1px"
          borderRadius="md"
          marginTop="10px"
        >
          {triggerButton}
          {filePreview === true ? (
            <Flex flexDirection="column">
              <Text borderBottom="1.5px solid #8E8E8E" fontSize="17px">
                {postInfo?.scriptName}
              </Text>
              <Text
                fontSize="17px"
                dangerouslySetInnerHTML={{
                  __html: filePreview.replace(/\n/g, "<br>"),
                }}
              ></Text>
              {children}
            </Flex>
          ) : (
            <Text align="center">파일 내용이 존재하지 않습니다 📂</Text>
          )}
        </Container>
      )}
    </Box>
  );
};
