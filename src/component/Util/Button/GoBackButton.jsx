import "./GoBackButton.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const GoBackButton = (props) => {
  return (
    <Link to={props.to}>
      <AiOutlineArrowLeft />
    </Link>
  );
};

export default GoBackButton;
