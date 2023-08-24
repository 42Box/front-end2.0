import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="pageTitle">{props.pageTitle}</h1>
      <span className="right-button">{props.rightButton}</span>
    </div>
  );
};

export default Header;
