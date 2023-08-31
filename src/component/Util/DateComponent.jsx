import { Text } from "@chakra-ui/react";

const DateComponent = (props) => {
  const dateObj = new Date(props.date);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  return (
    <Text>
      {year}. {month}. {day}
    </Text>
  );
};

export default DateComponent;
