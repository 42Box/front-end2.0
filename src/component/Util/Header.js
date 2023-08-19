import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <span className="left-button">{props.leftButton}</span>
      <h1 className="pageTitle">{props.pageTitle}</h1>
      <span className="right-button">{props.rightButton}</span>
    </div>
  );
};

export default Header;
