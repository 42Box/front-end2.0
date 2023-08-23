import axios from "axios";

export const SetUserState = async (setUser) => {
  axios
    .get("https://api.42box.site/auth-service/oauth2/authorization/42api", {
      withCredentials: true,
    })
    .then((response) => {
      const data = response.data;
      setUser({
        userUuid: data.userUuid,
        userNickname: data.userNickname,
        theme: data.theme,
        icon: data.icon,
      });
    })
    .catch((error) => console.error("Axios error: ", error));
};
