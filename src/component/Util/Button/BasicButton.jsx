import { Button } from "@chakra-ui/react";

const BasicButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      type={props.type}
      borderRadius="20px"
      border="1px solid #8E8E8E"
      backgroundColor="transparent"
      color="#8E8E8E"
      _hover={{
        border: "1.5px solid var(--Main-Orange, #FF9548)",
        background: "var(--Light-Orange, #FFF0E5)",
        color: "#FF9548",
      }}
    >
      {props.children}
    </Button>
  );
};

export default BasicButton;
