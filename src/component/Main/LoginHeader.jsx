import { useRecoilState } from "recoil";
import { GrLogin } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { MdOutlineContactPage } from "react-icons/md";
import { loginState } from "../../atom/userState";
// import { SetUserState } from "../../test/fetchData";
import "./RandingPage.css";
import { Link } from "react-router-dom";

export const LoginHeader = () => {
  const [isLoggedIn, SetIsLoggedIn] = useRecoilState(loginState);

  const loginHandler = async () => {
    // await SetUserState; 이 자리에 oauth 컴포넌트 연결하면 될듯?
    SetIsLoggedIn(true);
    console.log("logged in!");
  };

  const logoutHandler = () => {
    // window.localStorage.clear();
    SetIsLoggedIn(false);
    console.log("logged out!");
  };

  return (
    <header className={"header"}>
      {isLoggedIn === false ? (
        <GrLogin onClick={loginHandler} className={"icon1"}></GrLogin>
      ) : (
        <GrLogout onClick={logoutHandler} className={"icon1"}></GrLogout>
      )}
      <Link to={"/my-page"}>
        <MdOutlineContactPage className={"icon1"} />
      </Link>
    </header>
  );
};
