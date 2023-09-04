import { Flex, Text } from "@chakra-ui/react";

const PageNumbers = ({ current, last, onPagenation }) => {
  const pageNumberClickHandler = (page) => {
    onPagenation(page);
  };

  const currRange = Math.floor(current / 5) * 5;

  const commonStyle = {
    height: "47px",
    width: "47px",
    textAlign: "center",
    paddingTop: "10px",
    cursor: "pointer",
  };

  const currentStyle = {
    ...commonStyle,
    fontWeight: "700",
    color: "#FF9548",
    borderTop: "2px solid #FF9548",
  };

  const nonCurrentStyle = {
    ...commonStyle,
    fontWeight: "400",
    color: "#8E8E8E",
  };

  return (
    <Flex height="100%" alignItems="center">
      <Text
        style={current === currRange ? currentStyle : nonCurrentStyle}
        onClick={() => pageNumberClickHandler(currRange)}
      >
        {currRange + 1}
      </Text>
      {currRange + 1 <= last && (
        <Text
          style={current === currRange + 1 ? currentStyle : nonCurrentStyle}
          onClick={() => pageNumberClickHandler(currRange + 1)}
        >
          {currRange + 2}
        </Text>
      )}
      {currRange + 2 <= last && (
        <Text
          style={current === currRange + 2 ? currentStyle : nonCurrentStyle}
          onClick={() => pageNumberClickHandler(currRange + 2)}
        >
          {currRange + 3}
        </Text>
      )}
      {currRange + 3 <= last && (
        <Text
          style={current === currRange + 3 ? currentStyle : nonCurrentStyle}
          onClick={() => pageNumberClickHandler(currRange + 3)}
        >
          {currRange + 4}
        </Text>
      )}
      {currRange + 4 <= last && (
        <Text
          style={current === currRange + 4 ? currentStyle : nonCurrentStyle}
          onClick={() => pageNumberClickHandler(currRange + 4)}
        >
          {currRange + 5}
        </Text>
      )}
    </Flex>
  );
};

export default PageNumbers;
