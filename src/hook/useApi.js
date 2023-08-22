import axios from "axios";
import { useCallback } from "react";

const api = axios.create({
  baseURL: "https://api.42box.site/",
  withCredentials: true,
});

const apiCall = (method, url, data) => {
  if (method === "GET") {
    return api.get(url, data);
  }
  if (method === "POST") {
    return api.post(url, data);
  }
  if (method === "DELETE") {
    return api.delete(url);
  }
  if (method === "PUT") {
    return api.put(url, data);
  }
  if (method === "OPTIONS") {
    return api.options(url);
  }
};

const useApi = (method, url, data) => {
  const request = useCallback(
    (resolve, reject) => {
      apiCall(method, url, data)
        ?.then((response) => {
          resolve(response);
        })
        ?.catch((error) => {
          if (reject) reject(error);
          // else defaultErrorDialog(error);
        });
    },
    [method, url, data] // dependency array of useCallback()
  );
  return request;
};

export default useApi;