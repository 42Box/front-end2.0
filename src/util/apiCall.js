import axios from "axios";

const api = axios.create({
  baseURL: "https://api.42box.kr/",
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

export default apiCall;
