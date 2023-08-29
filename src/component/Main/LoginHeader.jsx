import { useRecoilState, useSetRecoilState } from "recoil";
import { userState, loginState } from "../../atom/states";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import MainTitle from "./MainTitle";
import MyPageIcon from "./MyPageIcon";
import LoginButton from "./LoginButton";

export const LoginHeader = () => {
  const [loginStateValue, setLoginStateValue] = useRecoilState(loginState);
  const setUserStateValue = useSetRecoilState(userState);

  const logoutHandler = () => {
    setLoginStateValue(false);
    setUserStateValue({
      uuid: null,
      nickname: null,
      theme: null,
      icon: null,
      urlList: null,
      profileImage: null,
    });

    document.cookie =
      "box-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.localStorage.removeItem("loginState");
    console.log("logged out!");
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
        <Box marginLeft="10px" />
        <MainTitle />
      </Flex>
      <Flex alignItems="center" height="100%">
        <MyPageIcon loginStateValue={loginStateValue} />
        <Box marginLeft="15px" />
        {/*<LoginButton*/}
        {/*    loginStateValue={loginStateValue}*/}
        {/*    logoutHandler={logoutHandler}*/}
        {/*/>*/}
        <LoginButton
          loginStateValue={loginStateValue}
          setLoginStateValue={setLoginStateValue}
          setUserStateValue={setUserStateValue}
          logoutHandler={logoutHandler}
        />
      </Flex>
    </Flex>
  );
};
