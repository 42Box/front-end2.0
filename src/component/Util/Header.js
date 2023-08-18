import "./Header.css";

const Header = (props) => {
  return (
    <div class="header">
      {props.leftButton}
      <h1 class="pageTitle">{props.pageTitle}</h1>
      {props.rightButton}
    </div>
  );
};

export default Header;
