import { useEffect, useState } from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import axios from "axios";

export const ScriptPreviewPop = ({ postInfo, errorHandle, children }) => {
  const [isPreviewOn, setIsPreviewOn] = useState(false);
  const [filePreview, setFilePreview] = useState("");

  useEffect(() => {
    if (postInfo?.scriptPath) {
      readFileHandler();
    }
    // eslint-disable-next-line
  }, [postInfo]);

  const readFileHandler = async () => {
    try {
      const response = await axios.get(
        `https://42box.kr/${postInfo?.scriptPath}`,
      );
      const file = response.data;
      console.log("read file api call: ", file);
      setFilePreview(file);
    } catch (error) {
      errorHandle(error.response);
    }
  };

  return (
    <Box>
      <Button
        width="146px"
        height="33px"
        marginTop="15px"
        marginLeft="10%"
        rounded="full"
        gap="2px"
        background="transparent"
        border="1px solid #8E8E8E"
        backgroundColor="transparent"
        color="#8E8E8E"
        _hover={
          isPreviewOn
            ? {
                border: "1.5px solid #000",
                background: "none",
                color: "#000",
              }
            : {
                border: "1.5px solid var(--Main-Orange, #FF9548)",
                background: "var(--Light-Orange, #FFF0E5)",
                color: "#FF9548",
              }
        }
        onClick={() => setIsPreviewOn(!isPreviewOn)}
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
          {filePreview.length > 0 ? (
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
