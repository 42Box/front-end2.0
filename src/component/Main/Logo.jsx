import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logo = ({ allowHomeNavigate }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (allowHomeNavigate) {
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
    <Flex
      width="43px"
      height="41px"
      display="inline-flex"
      padding="13px 8px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      borderRadius="10px"
      background="#FF9548"
      {...customStyles}
    >
      <Text color="#FFF" fontSize="12px" fontWeight="700">
        Logo
      </Text>
    </Flex>
  );
};

export default Logo;
