import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import MainTextPreview from "./MainTextPreview";
import BoardPreviewTitle from "./MainPreviewTitle";
import useApi from "../../hook/useApi";

const ScriptBoardPreview = () => {
  const getPosts = useApi("GET", "board-service/script-boards", {
    page: 0,
    size: 3,
    sort: "regDate,DESC",
    search: "",
    searchCondition: "NONE",
    isNext: true,
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect called!!");
    getPosts(
      (response) => {
        if (response.data.empty === true) return;
        setPosts(response.data.content);
      },
      (error) => {
        console.error("Error fetching script previews:", error);
      }
    );
    // eslint-disable-next-line
  }, []);

  return (
    <Flex flexDirection="column" alignItems="stretch" marginTop="50px">
      <BoardPreviewTitle title="스크립트" to="/script/board" />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link to={`/script/content/${post.boardId}`} key={post.boardId}>
            <MainTextPreview
              title={post.title}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
            />
          </Link>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </Flex>
  );
};

export default ScriptBoardPreview;
