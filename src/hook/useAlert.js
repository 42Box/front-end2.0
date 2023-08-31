import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { alertState } from "../recoil/alert";

export const useAlert = () => {
  const [alertData, setAlertData] = useRecoilState(alertState);

  const closeAlert = useCallback(
    () =>
      setAlertData((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setAlertData],
  );

  const openAlert = useCallback(
    ({ title, content, callback }) =>
      setAlertData({
        isOpen: true,
        title: title,
        content: content,
        callBack: callback,
      }),
    [setAlertData],
  );

  return { alertData, closeAlert, openAlert };
};
