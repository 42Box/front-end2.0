import { Flex, Text } from "@chakra-ui/react";

const IconAndCount = ({ icon, count }) => {
  return (
    <Flex alignItems="center" marginRight="10px">
      {icon}
      <Text marginLeft="4px" color="var(--dg-01, #9E9E9E)">
        {count}
      </Text>
    </Flex>
  );
};

export default IconAndCount;
