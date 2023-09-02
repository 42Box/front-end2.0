import { useState, useEffect } from "react";
import { Portal, Box, Text, Stack } from "@chakra-ui/react";

const FilterOptions = ({ isOpen, onSelect, filterButtonRef }) => {
  const options = [
    "추천 수 ~10",
    "추천 수 10~50",
    "추천 수 50~100",
    "추천 수 100~",
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (filterButtonRef.current) {
        const filterButtonRect =
          filterButtonRef.current.getBoundingClientRect();
        const top = filterButtonRect.bottom + 8;
        const left = filterButtonRect.left;
        console.log(top);
        console.log(left);
        setPosition({ top, left });
      }
    };

    // 초기 위치 설정
    updatePosition();

    // 윈도우 크기가 변경될 때 위치 업데이트
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    // 컴포넌트가 언마운트 될 때 리스너 제거
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [filterButtonRef]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return isOpen ? (
    <Portal>
      <Box
        position="absolute"
        top={position.top + "px"}
        left={position.left + "px"}
        zIndex="1"
        border="1.5px solid var(--main-orange, #FF9548)"
        borderRadius="15px"
        background="white"
        width="148px"
      >
        <Stack p="4" spacing="2">
          {options.map((option) => (
            <Text
              key={option}
              cursor="pointer"
              fontWeight={selectedOption === option ? "700" : "500"}
              color={
                selectedOption === option ? "#FF9548" : "var(--dg-03, #8E8E8E)"
              }
              onClick={() => handleOptionClick(option)}
              marginTop="5px"
              marginBottom="5px"
              _hover={{ fontWeight: "600" }}
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
