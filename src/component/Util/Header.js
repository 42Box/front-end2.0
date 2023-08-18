import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      {props.leftButton}
      <h1 className="pageTitle">{props.pageTitle}</h1>
      {props.rightButton}
    </div>
  );
};

export default Header;
