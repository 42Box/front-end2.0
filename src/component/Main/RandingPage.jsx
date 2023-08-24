import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";
import "./RandingPage.css";

const RandingPage = () => {
  return (
    <div>
      <LoginHeader />
      <main className={"main"}>
        <div className={"board-container"}>ad-area</div>
        <div className={"board-container"}>
          <Link to={"/board/script"}>
            <h1>Script-Board</h1>
          </Link>
        </div>
        <div className={"board-container"}>
          <Link to={"/board/icon"}>
            <h1>Icon-Board</h1>
          </Link>
        </div>
        <div className={"board-container"}>
          <Link to={"/board/service-register"}>
            <h1>Service-Register-Board</h1>
          </Link>
        </div>
      </main>
      <footer className={"footer"}></footer>
    </div>
  );
};

export default RandingPage;
