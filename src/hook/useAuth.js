import { useSetRecoilState } from "recoil";
import useApi from "../hook/useApi";
import userState from "../atom/userState";

const useAuth = () => {
  const request = useApi("GET", "auth-service/oauth2/authorization/42api", ""); // GET 42box.site/api/auth-service
  const setUser = useSetRecoilState(userState); // set hook

  // set userState with new user when useAuth is called on success response
  const onSuccess = (response) => {
    const { data } = response;
    const newUser = {
      isLoggedIn: true,
      userUuid: data.userUuid,
      userNickname: data.userNickname,
      theme: data.theme,
      icon: data.Icon,
    };
    setUser(newUser);
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

export default useAuth;
