import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const WriteButton = (props) => {
  return (
    <Link to={props.path}>
      <BsFillPencilFill />
    </Link>
  );
};

export default WriteButton;
