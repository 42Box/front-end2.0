import { Box } from "@chakra-ui/react";

const BackGround = ({ children }) => {
  return (
    <Box
      width="768px"
      flexShrink={0}
      borderRadius="20px"
      background="#FFF"
      display="flex"
      flexDirection="column"
      margin="auto"
    >
      {children}
    </Box>
  );
};

export default BackGround;
