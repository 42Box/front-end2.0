import { useEffect, useState } from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import ScriptPreviewButtonArrow from "../Util/ScriptPreviewButtonArrow";

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
        `https://42box.kr/${postInfo?.scriptPath}`
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
        height="33px"
        marginTop="10px"
        marginLeft="10%"
        marginBottom="5px"
        rounded="full"
        gap="2px"
        background={isPreviewOn ? "#FFFFFF" : "transparent"}
        cursor="pointer"
        border={"1px solid var(--dg-03, #8E8E8E)"}
        color={"var(--dg-03, #8E8E8E)"}
        _hover={{
          backgroundColor: "#EEEEEE",
        }}
        onClick={() => setIsPreviewOn(!isPreviewOn)}
      >
        <Flex>
          {isPreviewOn ? "스크립트 닫기 " : "스크립트 미리보기"}
          <ScriptPreviewButtonArrow isClicked={isPreviewOn} />
        </Flex>
      </Button>
      {isPreviewOn && (
        <Container
          marginTop="10px"
          overflowY="auto" //세로 스크롤
          maxHeight="50vh"
          maxW="610px"
          selfAlign="center"
          border="1px solid #8E8E8E"
          borderRadius="20px"
          color="#FAE9B8"
          backgroundColor="#444444"
        >
          {filePreview.length > 0 ? (
            <Flex flexDirection="column" width="100%">
              {children}
              <Text
                borderBottom="1.5px solid #FFFFFF"
                fontSize="17px"
                margin={0}
                fontWeight="700"
              >
                {postInfo?.scriptName}
              </Text>
              <Text
                fontSize="17px"
                dangerouslySetInnerHTML={{
                  __html: filePreview.replace(/\n/g, "<br>"),
                }}
              ></Text>
              <>{filePreview.length > 500 && children}</>
            </Flex>
          ) : (
            <Text align="center">파일 내용이 존재하지 않습니다 📂</Text>
          )}
        </Container>
      )}
    </Box>
  );
};
