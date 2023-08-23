import { useSetRecoilState } from "recoil";
import useApi from "./useApi";
import { userState, loginState } from "../atom/states";

const useOAuth = () => {
  const request = useApi("GET", "user-service/me", ""); // GET user information
  const setUserState = useSetRecoilState(userState); // set hook
  const setLoginState = useSetRecoilState(loginState);

  // set userState with new user when useAuth is called on success response
  const onSuccess = (response) => {
    const { data } = response;
    const newUser = {
      userUuid: data.userUuid,
      userNickname: data.userNickname,
      theme: data.theme,
      icon: data.Icon,
    };
    setUserState(newUser);
    setLoginState(true);
    window.localStorage.setItem("user", JSON.stringify(newUser));

    const jwtToken = response.headers
      .get("Set-Cookie")
      .split(";")
      .find((cookie) => cookie.trim().startsWith("jwt="))
      .split("=")[1];

    document.cookie = `jwt=${jwtToken}; expires=${new Date(
      data.expiresAt
    ).toUTCString()}; path=/`;
  };

  const onFailure = (error) => {
    const errorCode = parseInt(error?.response?.data?.errorCode, 10);
    //const [title, message] = getErrorMessage(errorCode).split("\r\n");
    const [title, message] = ["dummy error", "dummy error message"];
    window.localStorage.setItem(
      "error",
      JSON.stringify({ title, message: errorCode ? message : error.message })
    );
  };

  return () => request(onSuccess, onFailure); // return function
};

export default useOAuth;
