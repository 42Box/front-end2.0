import { useCallback } from "react";
import apiCall from "../util/apiCall";

const useApi = (method, url, data) => {
  const request = useCallback(
    async (resolve, reject) => {
      try {
        const response = await apiCall(method, url, data);
        if (resolve) {
          resolve(response);
        }
      } catch (error) {
        if (reject) reject(error);
        // else defaultErrorDialog(error);
      }
    },
    [method, url, data] // dependency array of useCallback()
  );
  return request;
};

export default useApi;
