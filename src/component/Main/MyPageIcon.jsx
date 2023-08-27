import { ReactComponent as Svg } from "../../asset/my-page-icon.svg";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

const MyPageIcon = ({ loginStateValue }) => {
  return (
    <Link to="/my-page">
      {loginStateValue && <Icon as={Svg} w={6} h={6} display="inline-flex" />}
    </Link>
  );
};

export default MyPageIcon;
