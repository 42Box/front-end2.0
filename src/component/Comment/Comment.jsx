import "./Comment.css";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";

const Comment = (props) => {
  return (
    <Box width="100%" marginTop="12px" rounded="lg">
      <Flex direction="column" marginBottom="12px" margin={4}>
        <Flex marginBottom="12px" alignItems="center">
          <Image
            src={`https://42box.kr/${props.img}`}
            width="23px"
            height="23px"
          />
          <Text marginLeft="8px" fontSize="18px" textColor="#8E8E8E">
            {props.author}
          </Text>
          <Text marginLeft="5px" marginRight="5px" textColor="#8E8E8E">
            │
          </Text>
          <Text marginLeft="5px" fontSize="17px">
            {props.date}
          </Text>
        </Flex>
        <Text marginLeft="5px" fontSize="17px">
          {props.content}
        </Text>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Comment;
