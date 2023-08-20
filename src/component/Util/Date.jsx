import "./Date.css";

const Date = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <span>
      <span className="date__month">{month}</span>
      <span className="date__day">{day}</span>
      <span className="date__year">{year}</span>
    </span>
  );
};

export default Date;
