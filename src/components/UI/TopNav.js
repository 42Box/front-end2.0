import "./TopNav.css";

const TopNav = (props) => {
  const classes = "top-navigation-bar " + props.classes;

  return <div className={classes}>{props.children}</div>;
};

export default TopNav;
