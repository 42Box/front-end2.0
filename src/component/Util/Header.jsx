import { Flex, Text, Box } from "@chakra-ui/react";
import Logo from "../Main/Logo";
import { useNavigate } from "react-router-dom";

const Header = ({
  pageTitle,
  rightButton,
  allowHomeNavigate,
  allowBoardNavigate,
  boardRoute,
}) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    if (allowBoardNavigate) {
      navigate(boardRoute);
    }
  };

  const customStyles = allowBoardNavigate
    ? {
        cursor: "pointer",
        onClick: handleTitleClick,
      }
    : {};

  return (
    <Flex
      height="114px"
      width="100%"
      borderBottom="1px solid #C7C7C7"
      justifyContent="space-between"
    >
      <Flex
        height="41px"
        alignItems="center"
        paddingLeft="32px"
        marginTop="45px"
      >
        <Logo allowHomeNavigate={allowHomeNavigate} />
        <Box paddingLeft="10px" />
        <Text fontSize="30px" fontWeight="700" margin={0} {...customStyles}>
          {pageTitle}
        </Text>
      </Flex>
      {rightButton}
    </Flex>
  );
};

export default Header;
