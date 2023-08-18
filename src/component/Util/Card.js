import "./Card";

const Card = (props) => {
  const classes = "simple-card" + props.classes;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
