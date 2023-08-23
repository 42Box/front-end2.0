import { atom } from "recoil";

// initial user state
export const userState = atom({
  key: "userState",
  default: {
    userUuid: null,
    userNickname: null,
    theme: null,
    icon: null,
  },
});

export const loginState = atom({
  key: "loginState",
  default: false,
});
