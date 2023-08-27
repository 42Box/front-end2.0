import { Flex, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex
      height="100%"
      display="inline-flex"
      padding="13px 8px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      borderRadius="10px"
      background="#FF9548"
    >
      <Text color="#FFF" fontSize="12px" fontWeight="700">
        Logo
      </Text>
    </Flex>
  );
};

export default Logo;
