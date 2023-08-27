import { Text } from "@chakra-ui/react";

const DateComponent = (props) => {
  const year = props.date.getFullYear();
  const month = (props.date.getMonth() + 1).toString().padStart(2, "0");
  const day = props.date.getDate().toString().padStart(2, "0");

  return (
    <Text>
      {year}. {month}. {day}
    </Text>
  );
};

export default DateComponent;
