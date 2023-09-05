import { useRecoilState, useSetRecoilState } from "recoil";
import { userState, loginState } from "../../recoil/states";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import MainTitle from "./MainTitle";
import MyPageIcon from "./MyPageIcon";
import LoginButton from "./LoginButton";
import apiCall from "../../util/apiCall";

export const LoginHeader = () => {
  const [loginStateValue, setLoginStateValue] = useRecoilState(loginState);
  const setUserStateValue = useSetRecoilState(userState);

  const logoutHandler = () => {
    apiCall("GET", "/user-service/users/me/logout")
      .then(() => {
        console.log("cookie removed");
        setLoginStateValue(false);
        setUserStateValue({
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
        console.log("user state info removed");
        window.localStorage.removeItem("loginState");
        window.localStorage.removeItem("userState");
        console.log("user state info in localStorage removed");
        alert("로그아웃에 성공하였습니다.");
      })
      .catch((error) => {
        alert("로그아웃에 실패하였습니다.");
        console.log("logout fail: ", error);
      });
  };

  return (
    <Flex
      height="45px"
      justifyContent="space-between"
      alignItems="center"
      background="#FFFFFF"
      borderRadius="10px"
      mb="20px"
    >
      <Flex alignItems="center" height="100%">
        <Logo />
        <Box paddingLeft="10px" />
        <MainTitle />
      </Flex>
      <Flex alignItems="center" height="100%">
        <MyPageIcon loginStateValue={loginStateValue} />
        <Box paddingLeft="15px" />
        <LoginButton
          loginStateValue={loginStateValue}
          logoutHandler={logoutHandler}
        />
      </Flex>
    </Flex>
  );
};
