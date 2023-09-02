import React from "react";
import { Button } from "@chakra-ui/react";

const LoginButton = ({ loginStateValue, logoutHandler }) => {
  const commonButtonStyles = {
    height: "33px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "700",
    border: "1px solid var(--dg-02, #CECECE)",
    color: "var(--dg-03, #8E8E8E)",
    textTransform: "uppercase",
    background: "trandparent",
  };

  const hoverStyles = {
    ...commonButtonStyles,
    border: "1.5px solid var(--main-orange, #FF9548)",
    background: "var(--light-orange, #FFEDE0)",
    color: "var(--main-orange, #FF9548)",
  };

  return (
    <Button
      {...commonButtonStyles}
      onClick={loginStateValue ? logoutHandler : null}
      _hover={hoverStyles}
    >
      {loginStateValue ? (
        "로그아웃"
      ) : (
        <a href="https://api.42box.kr/auth-service/oauth2/authorization/42api">
          로그인
        </a>
      )}
    </Button>
  );
};

export default LoginButton;
