import { Text } from "@chakra-ui/react";

const DateComponent = (props) => {
  const currentDate = new Date();
  const dateObj = new Date(props.date);

  const timeDifference = Math.floor((currentDate - dateObj) / (60 * 1000)); // Difference in minutes

  if (timeDifference < 60) {
    return <Text>{timeDifference} 분 전</Text>;
  } else if (
    currentDate.getDate() === dateObj.getDate() &&
    currentDate.getMonth() === dateObj.getMonth() &&
    currentDate.getFullYear() === dateObj.getFullYear()
  ) {
    const hour = dateObj.getHours().toString().padStart(2, "0");
    const min = dateObj.getMinutes().toString().padStart(2, "0");
    return (
      <Text>
        {hour}:{min}
      </Text>
    );
  } else if (
    currentDate.getDate() - dateObj.getDate() === 1 &&
    currentDate.getMonth() === dateObj.getMonth() &&
    currentDate.getFullYear() === dateObj.getFullYear()
  ) {
    return <Text>어제</Text>;
  } else {
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    return (
      <Text>
        {year}. {month}. {day}
      </Text>
    );
  }
};

export default DateComponent;
