import { rest } from "msw";
export const handlers = [
  //oauth 서비스
  rest.get(
    "https://api.42box.kr/auth-service/oauth2/authorization/42api",
    (req, res, ctx) => {
      console.log("intercept request!");
      return res(
        ctx.json({
          uuid: "1ec38349-8899-4cf7-8fd0-6789332c54a8",
          nickname: "jiyun",
          theme: 0,
          icon: "fox",
          urlList: {},
          statusMessage: null,
          profileImageUrl: null,
          profileImagePath: null,
          quickSlotList: null,
        }),
      );
    },
  ),
  //script 서비스
  rest.get(
    "https://api.42box.kr/board-service/script-boards",
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
        }),
      );
    },
  ),
  rest.get(
    "https://api.42box.kr/board-service/script-boards/:postId",
    (req, res, ctx) => {
      return res(
        ctx.json({
          boardId: 1,
          title: "Let's clean cache",
          content: "it's so useful!",
          scriptName: "my-script",
          scriptPath: "script_file/0bc6fc4c-609e-471d-9327-3c5d078e9fe4.sh",
          scriptUrl:
            "https://s3.ap-northeast-2.amazonaws.com/42box.kr/script_file/2b5dbc9a-0257-4255-9b83-06b044bca7b5.sh",
          writerUuid: "user-uuid",
          writerNickname: "jiyun",
          writerProfileImageUrl: "url",
          writerProfileImagePath: "path",
          regDate: "2023-08-30T15:15:33.3996",
          modDate: "2023-08-30T15:15:33.3996",
          viewCount: 0,
          likeCount: 3,
          reportCount: 0,
          commentCount: 0,
          boardLiked: false,
          scriptSaved: true,
          myScriptId: 5,
        }),
      );
    },
  ),
  rest.post(
    "https://api.42box.kr/user-service/users/me/scripts",
    (req, res, ctx) => {
      return res(ctx.status(200)); //statusCode 다르게 해서 테스트 해보기
    },
  ),
  rest.delete(
    "https://api.42box.kr/user-service/users/me/scripts/:savedId",
    (req, res, ctx) => {
      return res(ctx.status(200)); //statusCode 다르게 해서 테스트 해보기
    },
  ),

  // comment
  rest.get(
    "https://api.42box.kr/board-service/script-boards/:postId/comments",
    (req, res, ctx) => {
      const page = req.url.searchParams.get("page");
      console.log("data responding....");
      if (page === "1") {
        return res(
          ctx.json({
            comments: [
              {
                commentId: 1,
                content: "this is cool",
                writerUuid: "user-uuid",
                writerNickname: "jiyun",
                writerProfileImageUrl: "url",
                writerProfileImagePath: "path",
                regDate: "2023-08-29T15:15:33.3996",
                modDate: "2023-08-29T15:15:33.3996",
              },
              {
                commentId: 2,
                content: "Qué buenoooo",
                writerUuid: "user-uuid",
                writerNickname: "miguel",
                writerProfileImageUrl: "url",
                writerProfileImagePath: "path",
                regDate: "2023-08-30T15:15:33.3996",
                modDate: "2023-08-30T15:15:33.3996",
              },
            ],
            pageable: {
              sort: {
                empty: false,
                sorted: true,
                unsorted: false,
              },
              offset: 0,
              pageNumber: 0,
              pageSize: 2,
              paged: true,
              unpaged: false,
            },
            last: false,
            totalPages: 2,
            totalElements: 3,
            number: 0,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            first: true,
            size: 2,
            numberOfElements: 2, // 현재 페이지의 댓글 수
            empty: false,
          }),
        );
      } else {
        return res(
          ctx.json({
            comments: [
              {
                commentId: 3,
                content: "짱이에요",
                writerUuid: "user-uuid",
                writerNickname: "한국",
                writerProfileImageUrl: "url",
                writerProfileImagePath: "path",
                regDate: "2023-08-31T15:15:33.3996",
                modDate: "2023-08-31T15:15:33.3996",
              },
            ],
            pageable: {
              sort: {
                empty: false,
                sorted: true,
                unsorted: false,
              },
              offset: 0,
              pageNumber: 1,
              pageSize: 2,
              paged: true,
              unpaged: false,
            },
            last: true,
            totalPages: 2,
            totalElements: 3,
            number: 0,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            first: false,
            size: 1,
            numberOfElements: 1, // 현재 페이지의 댓글 수
            empty: false,
          }),
        );
      }
    },
  ),
  rest.get(
    "https://s3.ap-northeast-2.amazonaws.com/42box.kr/script_file/2b5dbc9a-0257-4255-9b83-06b044bca7b5.sh",
    (req, res, ctx) => {
      return res(
        ctx.body(
          "#!/bin/zsh\n" +
            "\n" +
            "# install brew\n" +
            "git clone --depth=1 https://github.com/Homebrew/brew /goinfre/$USER/.brew\n" +
            "echo 'export PATH=/goinfre/$USER/.brew/bin:$PATH' >> $HOME/.zshrc\n" +
            "source $HOME/.zshrc\n" +
            "brew doctor && brew update\n" +
            "\n" +
            "#ln -s ~/goinfre/.brew ~/.brew\n" +
            "\n" +
            "# install node\n" +
            "brew install node@18\n" +
            "echo 'export PATH=/goinfre/$USER/.brew/opt/node@18/bin:$PATH' >> $HOME/.zshrc\n" +
            "node --version && npm --version\n" +
            "npm install -g npm@9.8.1\n" +
            "npm install -g create-react-app",
        ),
      );
    },
  ),
  //icon 서비스
  rest.put(
    "https://api.42box.kr/user-service/users/me/icon",
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
];
