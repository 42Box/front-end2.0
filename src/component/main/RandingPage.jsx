import NotiBell from "./NotiBell";
import "./RandingPage.css";
import "./NotiBell.css";
import { Link } from "react-router-dom";

export default function RandingPage() {
  function CommonButton({ path, children }) {
    return <Link to={path}>{children}</Link>;
  }
  function BoardPreview() {
    return (
      <div>
        <h1>PREVIEW</h1>
      </div>
    );
  }

  return (
    <div>
      <header className={"header"}>
        <NotiBell />
      </header>
      <main className={"main"}>
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
      <footer></footer>
    </div>
  );
}
