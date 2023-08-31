import { rest } from "msw";
export const handlers = [
  rest.get(
    "https://api.42box.site/auth-service/oauth2/authorization/42api",
    (req, res, ctx) => {
      console.log("intercept request!");
      return res(
        ctx.json({
          uuid: "1ec38349-8899-4cf7-8fd0-6789332c54a8",
          nickname: "jiyun",
          theme: 0,
          icon: "fox",
          urlList: {},
          statusMessage: "hi",
          profileImageUrl: null,
          profileImagePath: null,
        }),
      );
    }
  ),
  rest.get(
    "https://api.42box.site/board-service/script-boards",
    (req, res, ctx) => {
      console.log("intercept request!");
      return res(
        ctx.json({
          content: [
            {
              boardId: 11,
              title: "Sample Title",
              content: "Sample Content",
              writerUuid: "user-uuid",
              writerName: "middle",
              writerProfileImageUrl: "url",
              writerProfileImagePath: "path",
              viewCount: 0,
              likeCount: 0,
              commentCount: 0,
              regDate: "2023-08-30T15:42:59.153814",
              modDate: "2023-08-30T15:42:59.153814",
            },
            {
              boardId: 12,
              title: "Sample Title",
              content: "Sample Content",
              writerUuid: "user-uuid",
              writerName: "middle",
              writerProfileImageUrl: "url",
              writerProfileImagePath: "path",
              viewCount: 0,
              likeCount: 0,
              commentCount: 0,
              regDate: "2023-08-30T15:42:59.153814",
              modDate: "2023-08-30T15:42:59.153814",
            },
            {
              boardId: 13,
              title: "Sample Title",
              content: "Sample Content",
              writerUuid: "user-uuid",
              writerName: "middle",
              writerProfileImageUrl: "url",
              writerProfileImagePath: "path",
              viewCount: 0,
              likeCount: 0,
              commentCount: 0,
              regDate: "2023-08-30T15:42:59.153814",
              modDate: "2023-08-30T15:42:59.153814",
            },
          ],
        })
      );
    }
  ),
  rest.post(
    "https://42box.site/api/user-service/boards/icon-boards",
    (req, res, ctx) => {
      console.log(req.json());
      return res(ctx.status(201));
    }
  ),

  rest.put(
    "https://api.42box.site/user-service/users/me/icon",
    (req, res, ctx) => {
      console.log(req.json());
      return res(ctx.status(200));
    }
  ),
];
