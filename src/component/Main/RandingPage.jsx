import { LoginHeader } from "./LoginHeader";
import AdBanner from "./AdBanner";
import { Box, Flex } from "@chakra-ui/react";
import ScriptBoardPreview from "./ScriptBoardPreview";
import IconBoardPreview from "./IconBoardPreview";
import ServiceRegisterBoardPreview from "./ServiceRegisterBoardPreview";

const RandingPage = () => {
  return (
    <Box
      width="768px"
      flexShrink={0}
      borderRadius="20px"
      background="#FFF"
      display="flex"
      flexDirection="column"
      margin="auto"
    >
      <Box width="704px" marginTop="45px" marginLeft="32px" marginRight="32px">
        <LoginHeader />
        <AdBanner />
        <ScriptBoardPreview />
        <IconBoardPreview />
        <ServiceRegisterBoardPreview />
        <Flex minHeight="calc(100vh * 0.1)" alignItems="baseline">
          {/* Footer 내용 */}
        </Flex>
      </Box>
    </Box>
  );
};

export default RandingPage;
