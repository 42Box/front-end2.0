import { atom } from "recoil";

// initial user state
const userState = atom({
  key: "userState",
  default: null,
});

export default userState;
