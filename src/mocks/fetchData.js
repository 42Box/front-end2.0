import axios from "axios";

export const SetUserState = async ({
  setLoginStateValue,
  setUserStateValue,
}) => {
  const response = await axios
    .get("https://api.42box.kr/auth-service/oauth2/authorization/42api")
    .catch((error) => console.error("Axios error: ", error));

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
  };
  setLoginStateValue(true);
  setUserStateValue(newUser);
  window.localStorage.setItem("loginState", "true");
  window.localStorage.setItem("user", JSON.stringify(newUser));
};
