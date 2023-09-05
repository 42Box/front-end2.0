import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../asset/logo.png";

const Logo = ({ allowHomeNavigate }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (allowHomeNavigate) {
      console.log("hererere");
      navigate("/");
    }
  };

  const customStyles = allowHomeNavigate
    ? {
        cursor: "pointer",
        onClick: handleClick,
      }
    : {};

  return (
    <Image
      src={logoImage}
      width="43px"
      heigt="41px"
      alignSelf="center"
      {...customStyles}
    />
  );
};

export default Logo;
