import { LoginHeader } from "./LoginHeader";
import AdBanner from "./AdBanner";
import { Box, Flex } from "@chakra-ui/react";
import ScriptBoardPreview from "./ScriptBoardPreview";
import IconBoardPreview from "./IconBoardPreview";
import ServiceBoardPreview from "./ServiceBoardPreview";
import BackGround from "../Util/BackGround";
import { searchBarState } from "../../recoil/searchBarState";
import { useRecoilState } from "recoil";

const RandingPage = () => {
  const [searchBarStateValue, setSearchBarStateValue] =
    useRecoilState(searchBarState);
  if (searchBarStateValue !== "") {
    setSearchBarStateValue("");
  }

  return (
    <BackGround>
      <Box width="704px" marginTop="45px" marginLeft="32px" marginRight="32px">
        <LoginHeader />
        <AdBanner />
        <ScriptBoardPreview />
        <IconBoardPreview />
        <ServiceBoardPreview />
        <Flex minHeight="calc(100vh * 0.1)" alignItems="baseline">
          {/* Footer 내용 */}
        </Flex>
      </Box>
    </BackGround>
  );
};

export default RandingPage;
