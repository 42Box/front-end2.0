import "./GoBackButton.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const GoBackButton = (props) => {
  return (
    <Link to={props.to}>
      <RiArrowGoBackFill />
    </Link>
  );
};

export default GoBackButton;
