import { atom } from "recoil";

export const alertState = atom({
  key: "alertState",
  default: {
    isOpen: false,
    title: "",
    content: "",
  },
});
