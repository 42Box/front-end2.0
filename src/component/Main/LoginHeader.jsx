import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState, loginState } from "../../atom/states";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ReactComponent as MyPageIcon } from "../../asset/my-page-icon.svg";

export const LoginHeader = () => {
  const [loginStateValue, setLoginStateValue] = useRecoilState(loginState);
  const setUserStateValue = useSetRecoilState(userState);

  const logoutHandler = () => {
    setLoginStateValue(false);
    setUserStateValue({
      userUuid: null,
      userNickname: null,
      theme: null,
      icon: null,
    });

    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    console.log("logged out!");
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      background="#FFFFFF"
      borderRadius="10px"
      mb="20px"
    >
      <Flex alignItems="center">
        {/* 로고 아이콘 */}
        <Flex
          display="inline-flex"
          padding="13px 8px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          borderRadius="10px"
          background="#FF9548"
        >
          <Text color="#FFF" fontSize="12px" fontWeight="700">
            Logo
          </Text>
        </Flex>
        <Box marginLeft="10px" />
        {/* 페이지 타이틀 */}
        <Text fontSize="30px" fontWeight="700" display="inline-flex">
          42Box
        </Text>
      </Flex>
      <Flex alignItems="center">
        {/* 마이페이지 아이콘 */}
        {!loginStateValue && (
          <Link to="/my-page">
            <Icon as={MyPageIcon} w={6} h={6} display="inline-flex" />
          </Link>
        )}
        <Box marginLeft="15px" />
        {/* 로그인 버튼 */}
        {!loginStateValue ? (
          <a href="https://api.42box.site/auth-service/oauth2/authorization/42api">
            <Box
              display="inline-flex"
              padding="7px 16px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="47px"
              border="1.5px solid var(--main-orange, #FF9548)"
              background="var(--light-orange, #FFEDE0)"
              color="var(--main-orange, #FF9548)"
            >
              <Text fontSize="16px" fontWeight="700" letterSpacing="0.05em">
                로그인
              </Text>
            </Box>
          </a>
        ) : (
          // 로그아웃 버튼
          <Box
            onClick={logoutHandler}
            display="inline-flex"
            padding="7px 16px"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            borderRadius="47px"
            border="1px solid var(--dg-02, #CECECE)"
          >
            <Text
              color="var(--dg-03, #8E8E8E)"
              fontSize="16px"
              fontWeight="700"
              letterSpacing="-0.02em"
              textTransform="uppercase"
            >
              로그아웃
            </Text>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};
