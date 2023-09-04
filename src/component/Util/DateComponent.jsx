import { Text } from "@chakra-ui/react";
import { DateTime } from "luxon";

const DateComponent = (props) => {
  const currentDate = DateTime.local();
  const dateObj = DateTime.fromISO(props.date).plus({ hours: 9 });

  const timeDifference = Math.floor(
    currentDate.diff(dateObj, "minutes").minutes,
  );

  if (timeDifference < 1) {
    return <Text textColor="#8E8E8E">방금 전</Text>;
  }
  if (timeDifference < 60) {
    return <Text textColor="#8E8E8E">{timeDifference}분 전</Text>;
  }
  if (currentDate.hasSame(dateObj, "day")) {
    return (
      <Text letterSpacing="1.5px" textColor="#8E8E8E">
        {dateObj.toFormat("HH:mm")}
      </Text>
    );
  }
  if (currentDate.hasSame(dateObj.plus({ days: 1 }), "day")) {
    return <Text textColor="#8E8E8E">어제</Text>;
  }
  return <Text textColor="#8E8E8E">{dateObj.toFormat("yyyy. MM. dd")}</Text>;
};

export default DateComponent;
