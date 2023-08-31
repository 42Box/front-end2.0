import { atom } from "recoil";

// initial user state
export const userState = atom({
  key: "userState",
  default: {
    uuid: null,
    nickname: null,
    theme: null,
    icon: null,
    urlList: null,
    profileImageUrl: null,
    profileImagePath: null,
  },
});

export const loginState = atom({
  key: "loginState",
  default: false,
});