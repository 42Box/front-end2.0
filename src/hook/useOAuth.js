import { useSetRecoilState } from "recoil";
import useApi from "./useApi";
import { userState, loginState } from "../recoil/states";

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
      statusMessage: data.statusMessage,
      profileImageUrl: data.profileImageUrl,
      profileImagePath: data.profileImagePath,
      quickSlotList: data.quickSlotList,
    };
    console.log("login success!!!");
    console.log(newUser);
    setUserState(newUser);
    setLoginState(true);
    window.localStorage.setItem("loginState", "true");
    window.localStorage.setItem("user", JSON.stringify(newUser));

    const send = new Promise((resolve, reject) =>
      window.webkit.messageHandlers.userProfile.postMessage(
        JSON.stringify(newUser),
      ),
    );
    send.then((resolve) => console.log("send success:", resolve));
    send.catch((reject) => console.error("Error downloading file:", reject));
  };

  const onFailure = (error) => {
    console.log("login failed!!!!");
    const errorCode = parseInt(error?.response?.data?.errorCode, 10);
    const [title, message] = ["dummy error", "dummy error message"];
    window.localStorage.setItem(
      "error",
      JSON.stringify({ title, message: errorCode ? message : error.message }),
    );
  };

  return () => request(onSuccess, onFailure); // return function
};

export default useOAuth;
