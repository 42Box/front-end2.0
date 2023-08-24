import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";
import AdBanner from "../AdBanner/AdBanner";
import "./RandingPage.css";

const RandingPage = () => {
  return (
    <div>
      <LoginHeader />
      <main className={"main"}>
        <div className={"ad-section"}>
          <AdBanner />
        </div>
        <div className={"board-container"}>
          <Link to={"/script/board"}>
            <h1>Script-Board</h1>
          </Link>
        </div>
        <div className={"board-container"}>
          <Link to={"/icon/board"}>
            <h1>Icon-Board</h1>
          </Link>
        </div>
        <div className={"board-container"}>
          <Link to={"/service-register/board"}>
            <h1>Service-Register-Board</h1>
          </Link>
        </div>
      </main>
      <footer className={"footer"}></footer>
    </div>
  );
};

export default RandingPage;
