import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import moreIcon from "../../asset/more-bt.png";
import GrayLine from "./GrayLine";

const BoardPreviewTitle = ({ title, to }) => {
  return (
    <Box width="100%">
      <Link to={to}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="10px"
        >
          <Heading
            fontSize="24px"
            fontWeight={700}
            lineHeight="normal"
            textAlign="left"
          >
            {title}
          </Heading>
          <Image src={moreIcon} alt="More Icon" boxSize="26px" />
        </Flex>
      </Link>
      <GrayLine />
    </Box>
  );
};

export default BoardPreviewTitle;
