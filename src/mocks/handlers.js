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
          scriptPath: "script_file/1756fb9a-024e-4034-9f0a-817cb8bfc6ac.sh",
          scriptUrl:
            "https://42box-script-gateway-private-bucket.s3.ap-northeast-2.amazonaws.com/script_file/1756fb9a-024e-4034-9f0a-817cb8bfc6ac.sh",
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
          scriptSaved: false,
          savedId: 0,
        }),
      );
    },
  ),
  rest.post(
    "https://api.42box.kr/user-service/users/me/scripts",
    (req, res, ctx) => {
      return res(
        ctx.json({
          savedId: 17,
          name: "hello",
          description: "좋은 스크립트",
          path: "/src",
          userUuid: "user-uuid",
          scriptUuid: "37a56076-e72c-4efe-ba7f-de0effe7f4c3",
        }),
      ); //statusCode 다르게 해서 테스트 해보기
    },
  ),
  rest.delete(
    "https://api.42box.kr/user-service/users/me/scripts/:savedId",
    (req, res, ctx) => {
      return res(
        ctx.json({
          savedId: 1,
          name: "hello",
          description: "좋은 스크립트",
          path: "/src",
          userUuid: "1",
        }),
      ); //statusCode 다르게 해서 테스트 해보기
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

  // comment 서비스
  rest.get(
    `https://api.42box.kr/comment-service/script-boards/:postId/comments`,
    (req, res, ctx) => {
      const page = req.url.searchParams.get("page");
      console.log("data responding....");
      if (page === "1") {
        return res(
          ctx.json({
            content: [
              {
                commentId: 6,
                commentBoardId: 1,
                commentWriterUuid: "user-uuid1",
                commentWriterNickname: "sechung",
                commentWriterProfileImagePath: "ddd",
                commentContent: "안쓰고는 못배기는 서비스라고 할 수 있지",
                commentRegDate: "2023-09-02T22:19:04.760155",
                commentModDate: "2023-09-02T22:19:04.760155",
                commentType: "SCRIPT_BOARDS",
              },
              {
                commentId: 5,
                commentBoardId: 1,
                commentWriterUuid: "user-uuid1",
                commentWriterNickname: "sechung",
                commentWriterProfileImagePath: "ddd",
                commentContent: "안쓰고는 못배기는 서비스라고 할 수 있지",
                commentRegDate: "2023-09-02T22:19:04.243801",
                commentModDate: "2023-09-02T22:19:04.243801",
                commentType: "SCRIPT_BOARDS",
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
            totalPages: 3,
            totalElements: 5,
            number: 0,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            first: true,
            size: 2,
            numberOfElements: 2,
            empty: false,
          }),
        );
      } else if (page === "2") {
        return res(
          ctx.json({
            content: [
              {
                commentId: 4,
                commentBoardId: 1,
                commentWriterUuid: "user-uuid1",
                commentWriterNickname: "sechung",
                commentWriterProfileImagePath: "ddd",
                commentContent: "안쓰고는 못배기는 서비스라고 할 수 있지",
                commentRegDate: "2023-09-02T22:19:03.747332",
                commentModDate: "2023-09-02T22:19:03.747332",
                commentType: "SCRIPT_BOARDS",
              },
              {
                commentId: 3,
                commentBoardId: 1,
                commentWriterUuid: "user-uuid1",
                commentWriterNickname: "sechung",
                commentWriterProfileImagePath: "ddd",
                commentContent: "안쓰고는 못배기는 서비스라고 할 수 있지",
                commentRegDate: "2023-09-02T22:19:03.183522",
                commentModDate: "2023-09-02T22:19:03.183522",
                commentType: "SCRIPT_BOARDS",
              },
            ],
            pageable: {
              sort: {
                empty: false,
                sorted: true,
                unsorted: false,
              },
              offset: 2,
              pageNumber: 1,
              pageSize: 2,
              paged: true,
              unpaged: false,
            },
            last: false,
            totalPages: 3,
            totalElements: 5,
            number: 0,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            first: false,
            size: 2,
            numberOfElements: 2,
            empty: false,
          }),
        );
      } else {
        return res(
          ctx.json({
            content: [
              {
                commentId: 1,
                commentBoardId: 1,
                commentWriterUuid: "user-uuid1",
                commentWriterNickname: "sechung",
                commentWriterProfileImagePath: "ddd",
                commentContent: "안쓰고는 못배기는 서비스라고 할 수 있지",
                commentRegDate: "2023-09-02T22:19:01.880577",
                commentModDate: "2023-09-02T22:19:01.880577",
                commentType: "SCRIPT_BOARDS",
              },
            ],
            pageable: {
              sort: {
                empty: false,
                sorted: true,
                unsorted: false,
              },
              offset: 4,
              pageNumber: 2,
              pageSize: 1,
              paged: true,
              unpaged: false,
            },
            last: true,
            totalPages: 3,
            totalElements: 5,
            number: 0,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            first: false,
            size: 2,
            numberOfElements: 1,
            empty: false,
          }),
        );
      }
    },
  ),
  rest.post(
    "https://api.42box.kr/comment-service/script-boards/:postId/comments",
    (req, res, ctx) => {
      return res(
        ctx.json({
          commentId: 1,
          commentBoardId: 1,
          commentWriterUuid: "user-uuid1",
          commentWriterNickname: "sechung",
          commentWriterProfileImagePath: "ddd",
          commentContent: "ddddd",
          commentRegDate: "2023-09-02T22:19:01.880577",
          commentModDate: "2023-09-02T22:22:14.209123",
          commentType: "SCRIPT_BOARDS",
        }),
      ); //statusCode 다르게 해서 테스트 해보기
    },
  ),
  // rest.post(
  //   "https://api.42box.kr/comment-service/script-boards/:postId/comments",
  //   (req, res, ctx) => {
  //     return res(ctx.status(400)); //statusCode 다르게 해서 테스트 해보기
  //   },
  // ),

  // liked 서비스
  rest.post(
    "https://api.42box.kr/board-service/script-boards/likes",
    (req, res, ctx) => {
      return res(ctx.status(201));
    },
  ),

  // icon 서비스
  rest.put(
    "https://api.42box.kr/user-service/users/me/icon",
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
];
