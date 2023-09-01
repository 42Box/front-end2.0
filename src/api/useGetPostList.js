import { useState, useEffect } from "react";
import useApi from "../hook/useApi";

const useGetPostList = (requestPath, viewOption) => {
  const [postList, setPostList] = useState([]);

  const getPosts = useApi("GET", `board-service/${requestPath}`, {
    params: viewOption,
  });

  const onSuccess = (response) => {
    setPostList(response.data.content);
  };

  const onError = (error) => {
    console.error("Error fetching script previews:", error);
  };

  useEffect(() => {
    getPosts(onSuccess, onError);
    // eslint-disable-next-line
  }, []);

  return postList;
};

export default useGetPostList;
