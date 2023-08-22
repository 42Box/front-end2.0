import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../atom/userState";

export const SetUserState = async () => {
  const setUser = useSetRecoilState(userState);

  const { data } = axios
    .get("https://api.42box.site/auth-service/oauth2/authorization/42api", {
      withCredentials: true,
    })
    .catch((error) => console.log(error));

  setUser({
    isLoggedIn: data.isLoggedIn,
    userUuid: data.userUuid,
    userNickname: data.userNickname,
    theme: data.theme,
    icon: data.icon,
  });
};
