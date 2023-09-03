import { useState, useEffect } from "react";
import useApi from "../hook/useApi";

const useGetBoardInfo = (requestPath, viewOption) => {
  const [boardInfo, setBoardInfo] = useState({
    content: [],
    pageable: {},
    last: false,
    totalPages: 0,
    totalElements: 0,
    number: 0,
    sort: {},
    first: false,
    size: 15,
    numberOfElements: 0,
    empty: true,
  });

  const queryString = new URLSearchParams(viewOption).toString();
  window.history.replaceState({}, "", `?${queryString}`);

  const getBoardInfo = useApi(
    "GET",
    `board-service/${requestPath}?${queryString}`,
    ""
  );

  const onSuccess = (response) => {
    setBoardInfo(response.data);
  };

  const onError = (error) => {
    console.error("Error fetching script previews:", error);
  };

  useEffect(() => {
    getBoardInfo(onSuccess, onError);
    // eslint-disable-next-line
  }, [viewOption]);

  return boardInfo;
};

export default useGetBoardInfo;
