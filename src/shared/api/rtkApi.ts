import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOCALSTORAGE_USER_KEY } from "../constants/localStorage";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: __API_BASE_URL__,
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem(LOCALSTORAGE_USER_KEY);

      if (authToken) {
        headers.set("Authorization", authToken);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
