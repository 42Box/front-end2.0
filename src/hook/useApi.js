import axios from "axios";
import { useCallback } from "react";

const api = axios.create({
  baseURL: "https://api.42box.site/",
  withCredentials: true,
});

const apiCall = async (method, url, data) => {
  try {
    if (method === "GET") {
      return await api.get(url, data);
    }
    if (method === "POST") {
      return await api.post(url, data);
    }
    if (method === "DELETE") {
      return await api.delete(url);
    }
    if (method === "PUT") {
      return await api.put(url, data);
    }
    if (method === "OPTIONS") {
      return await api.options(url);
    }
  } catch (error) {
    throw error;
  }
};

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
