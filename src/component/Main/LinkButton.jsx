import { Link } from "react-router-dom";

function LinkButton({ path, children }) {
  return <Link to={path}>{children}</Link>;
}

export default LinkButton;
