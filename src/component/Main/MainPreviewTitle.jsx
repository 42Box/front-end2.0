import { Link } from "react-router-dom";
import { Flex, Heading, Image } from "@chakra-ui/react";
import moreIcon from "../../asset/more-bt.png";

const BoardPreviewTitle = ({ title, to }) => {
  return (
    <Link to={to}>
      <Flex
        height="60px"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #C7C7C7"
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
  );
};

export default BoardPreviewTitle;
