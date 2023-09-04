import { Button } from "@chakra-ui/react";

const PagenationButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      height="21px"
      width="47px"
      borderColor="transparent"
      background="transparent"
      color={props.color}
      _hover={props._hover}
      alignItems="center"
    >
      {props.children}
    </Button>
  );
};

export default PagenationButton;
