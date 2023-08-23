import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState, loginState } from "../../atom/states";

import "./RandingPage.css";
import { GrLogin } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { MdOutlineContactPage } from "react-icons/md";

export const LoginHeader = () => {
  const [loginStateValue, setLoginStateValue] = useRecoilState(loginState);
  const [userStateValue, setUserStateValue] = useRecoilState(userState);

  const logoutHandler = () => {
    // window.localStorage.clear();
    setLoginStateValue(false);
    setUserStateValue({
      userUuid: null,
      userNickname: null,
      theme: null,
      icon: null,
    });

    // remove jwt tokken
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    console.log("logged out!");
  };

  console.log("isLoggedIn: ", loginStateValue);
  console.log(userStateValue);

  return (
    <header className="header">
      {loginStateValue === false ? (
        <a href="https://api.42box.site/auth-service/oauth2/authorization/42api">
          <GrLogin className="icon1" />
        </a>
      ) : (
        <GrLogout onClick={logoutHandler} className="icon1"></GrLogout>
      )}
      {loginStateValue === true && (
        <Link to="/my-page">
          <MdOutlineContactPage className="icon1" />
        </Link>
      )}
    </header>
  );
};
