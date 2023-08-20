import "./Container.css";

const Container = ({ children, backgroundColor }) => {
  const containerStyle = {
    backgroundColor: backgroundColor || "#ffffff",
  };

  return (
    <div className="container" style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
