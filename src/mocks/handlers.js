import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://api.42box.site/auth-service/oauth2/authorization/42api",
    (req, res, ctx) => {
      console.log("intercept request!");
      return res(
        ctx.json({
          userUuid: "uu1234",
          userNickname: "jiyun",
          theme: 1,
          icon: 1,
        }),
      );
    },
  ),
];
