import { useSetRecoilState } from "recoil";
import useApi from "./useApi";
import { userState, loginState } from "../atom/states";

const useOAuth = () => {
  const request = useApi("GET", "user-service/users/me", ""); // GET user information
  const setUserState = useSetRecoilState(userState); // set hook
  const setLoginState = useSetRecoilState(loginState);

  // set userState with new user when useAuth is called on success response
  const onSuccess = (response) => {
    const { data } = response;
    const newUser = {
      uuid: data.uuid,
      nickname: data.nickname,
      theme: data.theme,
      icon: data.icon,
      urlList: data.urlList,
      profileImage: data.profileImage,
    };
    setUserState(newUser);
    setLoginState(true);
    window.localStorage.setItem("user", JSON.stringify(newUser));

    const jwtToken = response.headers
      .get("Set-Cookie")
      .split(";")
      .find((cookie) => cookie.trim().startsWith("box-auth="))
      .split("=")[1];

    document.cookie = `box-auth=${jwtToken}; expires=${new Date(
      data.expiresAt
    ).toUTCString()}; path=/`;
  };

  const onFailure = (error) => {
    const errorCode = parseInt(error?.response?.data?.errorCode, 10);
    const [title, message] = ["dummy error", "dummy error message"];
    window.localStorage.setItem(
      "error",
      JSON.stringify({ title, message: errorCode ? message : error.message })
    );
  };

  return () => request(onSuccess, onFailure); // return function
};

export default useOAuth;
