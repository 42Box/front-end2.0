import { useState } from "react";
import { Portal, Box, Text, Stack } from "@chakra-ui/react";

const FilterOptions = ({ isOpen, onSelect }) => {
  const options = [
    "추천 수 ~10",
    "추천 수 10~50",
    "추천 수 50~100",
    "추천 수 100~",
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return isOpen ? (
    <Portal>
      <Box
        position="absolute"
        top="calc(15% + 10px)"
        left="145"
        zIndex="1"
        border="1.5px solid var(--main-orange, #FF9548)"
        borderRadius="15px"
        background="white"
        width="145px"
      >
        <Stack p="4" spacing="2">
          {options.map((option) => (
            <Text
              key={option}
              cursor="pointer"
              fontWeight={selectedOption === option ? "700" : "500"}
              color={
                selectedOption === option ? "black" : "var(--dg-03, #8E8E8E)"
              }
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Text>
          ))}
        </Stack>
      </Box>
    </Portal>
  ) : null;
};

export default FilterOptions;
