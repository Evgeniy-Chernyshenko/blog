import axios from "axios";
import { LOCALSTORAGE_USER_KEY } from "../constants/localStorage";

export const apiInstance = axios.create({
  baseURL: `${__API_BASE_URL__}`,
});

apiInstance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization =
        localStorage.getItem(LOCALSTORAGE_USER_KEY) ?? "";
    }

    return config;
  },
  (error) => Promise.reject(error),
);
