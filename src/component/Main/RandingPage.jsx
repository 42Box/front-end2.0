import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";
import "./RandingPage.css";

const RandingPage = () => {
  const CommonButton = ({ path, children }) => {
    return <Link to={path}>{children}</Link>;
  };
  const BoardPreview = () => {
    return (
      <div>
        <h1>PREVIEW</h1>
      </div>
    );
  };

  return (
    <div>
      <LoginHeader />
      <main className={"main"}>
        <div className={"board-container"}>ad-area</div>
        <div className={"board-container"}>
          <CommonButton path={"/boards/script-boards"}>
            <BoardPreview />
          </CommonButton>
        </div>
        <div className={"board-container"}>
          <CommonButton path={"/boards/script-boards"}>
            <BoardPreview />
          </CommonButton>
        </div>
      </main>
      <footer className={"footer"}></footer>
    </div>
  );
};

export default RandingPage;
