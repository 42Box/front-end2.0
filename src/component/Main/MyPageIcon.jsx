import { ReactComponent as Svg } from "../../asset/my-page-icon.svg";
import { Link } from "react-router-dom";
import { Icon, Flex } from "@chakra-ui/react";

const MyPageIcon = ({ loginStateValue }) => {
  return (
    <Link to="/my-page">
      {loginStateValue && (
        <Flex
          width="33px"
          height="33px"
          borderRadius="8px"
          _hover={{ background: "#F5F5F5" }}
          align="center"
          justify="center"
        >
          <Icon as={Svg} w={6} h={6} display="inline-flex" />
        </Flex>
      )}
    </Link>
  );
};

export default MyPageIcon;
