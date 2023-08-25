import { LoginHeader } from "./LoginHeader";
import AdBanner from "./AdBanner";
import { Box, Flex } from "@chakra-ui/react";
import ScriptBoardPreview from "./ScriptBoardPreview";
import IconBoardPreview from "./IconBoardPreview";
import ServiceRegisterBoardPreview from "./ServiceRegisterBoardPreview";

const RandingPage = () => {
  return (
    <Flex
      justifyContent="center" // 가로 중앙 정렬
      alignItems="center" // 세로 중앙 정렬
      minHeight="100vh" // 화면 전체 높이 차지
      background="#FFF"
    >
      <Box
        width="768px"
        height="1176px"
        flexShrink={0}
        borderRadius="20px"
        background="#FFF"
        display="flex"
        flexDirection="column"
      >
        <LoginHeader />
        <Box marginTop={{ base: "20px", md: "40px" }}>
          <AdBanner />
        </Box>
        <Box marginTop={{ base: "20px", md: "40px" }}>
          <ScriptBoardPreview />
        </Box>
        <Box marginTop={{ base: "20px", md: "40px" }}>
          <IconBoardPreview />
        </Box>
        <Box marginTop={{ base: "20px", md: "40px" }}>
          <ServiceRegisterBoardPreview />
        </Box>
        <Flex minHeight="calc(100vh * 0.1)" alignItems="baseline">
          {/* Footer 내용 */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default RandingPage;
