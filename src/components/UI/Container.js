import "./Container.css";

const Container = (props) => {
  const classes = "container " + props.classes;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
