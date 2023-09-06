import { Box, Text } from "@chakra-ui/react";

const WrongApproach = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh" // 화면의 전체 높이
    >
      <Text fontSize="25px">잘못된 접근입니다.</Text>
    </Box>
  );
};

export default WrongApproach;
