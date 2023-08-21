import { Link } from "react-router-dom";

export default function CommonButton({ path, children }) {
  return <Link to={path}>{children}</Link>;
}
