import "./PostDate.css";

const PostDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <span>
      {year}/{month}/{day}
    </span>
  );
};

export default PostDate;
