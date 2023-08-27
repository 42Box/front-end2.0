import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../asset/edit.svg";
import { Button, Text } from "@chakra-ui/react";

const WriteButton = (props) => {
  return (
    <Link to={props.path}>
      <Button
        display="flex"
        width="106px"
        height="40px"
        padding="7px 13px"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        flexShrink={0}
        borderRadius="51px"
        border="1.5px solid var(--main-orange, #FF9548)"
        background="var(--light-orange, #FFF0E5)"
        marginTop="45px"
        marginRight="32px"
      >
        <Text
          color="var(--main-orange, #FF9548)"
          textAlign="center"
          fontSize="18px"
          fontWeight="700"
        >
          글쓰기
        </Text>
        <EditIcon />
      </Button>
    </Link>
  );
};

export default WriteButton;
