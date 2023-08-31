import React from "react";
import { Box, Text } from "@chakra-ui/react";
// import { SetUserState } from "../../mocks/fetchData";

// const LoginButton = ({
//   loginStateValue,
//   setLoginStateValue,
//   setUserStateValue,
//   logoutHandler,
// }) => {
const LoginButton = ({ loginStateValue, logoutHandler }) => {
  const commonButtonStyles = {
    height: "100%",
    display: "inline-flex",
    padding: "7px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "47px",
    cursor: "pointer",
  };

  const loginButtonStyles = {
    border: "1.5px solid var(--main-orange, #FF9548)",
    background: "var(--light-orange, #FFEDE0)",
    color: "var(--main-orange, #FF9548)",
  };

  const logoutButtonStyles = {
    border: "1px solid var(--dg-02, #CECECE)",
  };

  return (
    <Box>
      {loginStateValue ? (
        <Box
          {...commonButtonStyles}
          {...logoutButtonStyles}
          onClick={logoutHandler}
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
      ) : (
        <Box {...commonButtonStyles} {...loginButtonStyles}>
          <a href="https://api.42box.kr/auth-service/oauth2/authorization/42api">
            <Text fontSize="16px" fontWeight="700" letterSpacing="0.05em">
              로그인
            </Text>
          </a>
        </Box>
        // <Box
        //   {...commonButtonStyles}
        //   {...loginButtonStyles}
        //   onClick={() =>
        //     SetUserState({
        //       setLoginStateValue,
        //       setUserStateValue,
        //     })
        //   }
        // >
        //   <Text fontSize="16px" fontWeight="700" letterSpacing="0.05em">
        //     로그인
        //   </Text>
        // </Box>
      )}
    </Box>
  );
};

export default LoginButton;
