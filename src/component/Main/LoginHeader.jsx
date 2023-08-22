import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { GrLogin } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { MdOutlineContactPage } from "react-icons/md";
import { loginState, userState } from "../../atom/userState";
import { SetUserState } from "../../mocks/fetchData";
import "./RandingPage.css";

export const LoginHeader = () => {
  const [isLoggedIn, SetIsLoggedIn] = useRecoilState(loginState);
  const setUser = useSetRecoilState(userState);

  const userStateValue = useRecoilValue(userState);

  const loginHandler = async () => {
    await SetUserState(setUser); // msw에 요청 보내는 부분
    SetIsLoggedIn(true);
    console.log("logged in!");
  };

  const logoutHandler = () => {
    // window.localStorage.clear();
    SetIsLoggedIn(false);
    console.log("logged out!");
  };

  console.log("isLoggedIn: ", isLoggedIn);
  console.log(userStateValue);

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
