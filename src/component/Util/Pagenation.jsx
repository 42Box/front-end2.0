import { Flex, Text, Button } from "@chakra-ui/react";

const Pagenation = ({ onPagenation, current, last }) => {
  const nextHandler = () => {
    if (current < last) {
      onPagenation(current + 1);
    }
  };

  const previousHandler = () => {
    if (current > 0) {
      onPagenation(current - 1);
    }
  };

  return (
    <Flex
      width="704px"
      height="70px"
      justifyContent="space-between"
      alignSelf="center"
      alignItems="center"
    >
      <Button onClick={previousHandler}>Previous</Button>
      <Flex height="100%" alignItems="center" flex="1">
        {current > 0 && (
          <Text color="gray" marginLeft="100px">
            {current}
          </Text>
        )}
        <Text fontWeight="bold" fontSize="20px" margin="auto">
          {current + 1}
        </Text>
        {current < last && (
          <Text color="gray" marginRight="100px">
            {current + 2}
          </Text>
        )}
      </Flex>
      <Button onClick={nextHandler}>Next</Button>
    </Flex>
  );
};

export default Pagenation;
