import "./Comment.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Comment = (props) => {
  return (
    <Box height="134px" rounded="lg" borderBottom="1px solid #E8E8E8">
      <Box height="30px" />
      <Flex alignItems="center" height="26px">
        <Image
          src={`https://42box.kr/${props.img}`}
          width="23px"
          height="23px"
        />
        <Flex paddingLeft="8px" />
        <Text margin={0} fontSize="18px" textColor="#8E8E8E">
          {props.author}
        </Text>
        <Flex paddingLeft="5px" />
        <Text margin={0} textColor="#8E8E8E">
          │
        </Text>
        <Text paddingTop="2px" margin={0} fontSize="17px">
          {props.date}
        </Text>
      </Flex>
      <Text fontSize="17px" margin={0}>
        {props.content.split("\n").map((line) => (
          <Text>
            {line}
            <br />
          </Text>
        ))}
      </Text>
    </Box>
  );
};

export default Comment;
