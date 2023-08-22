import { atom } from "recoil";

// initial user state
const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    userUuid: null,
    userNickname: null,
    theme: null,
    icon: null,
  },
});

export default userState;
