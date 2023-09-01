import { atom } from "recoil";

export const viewOptionState = atom({
  key: "viewOption",
  default: {
    page: 0,
    size: 1,
    sort: "regDate,DESC",
    search: "",
    searchCondition: "NONE",
  },
});
