import { useState } from "react";
import useApi from "../hook/useApi";
import { useEffect } from "react";

const useGetMe = () => {
  const [userInfo, setUserInfo] = useState({
    uuid: null,
    nickname: null,
    theme: null,
    icon: null,
    urlList: null,
    statusMessage: null,
    profileImageUrl: null,
    profileImagePath: null,
    bigProfileImagePath: null,
    quickSlotList: null,
  });

  const request = useApi("GET", "user-service/users/me", "");

  const onSuccess = (response) => {
    setUserInfo(response.data);
  };

  const onFailure = (error) => {
    console.log("error in useGetMe!!!!!!!", error);
  };

  useEffect(() => {
    request(onSuccess, onFailure);
    // eslint-disable-next-line
  }, []);

  return userInfo;
};

export default useGetMe;
