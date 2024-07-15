import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: "include",

    validateResponse: (response) => {
      if (response.status !== 200) {
        localStorage.setItem("isSignedIn", false);
      }
      return response.ok;
    },
  }),

  endpoints: (builder) => ({}),
});

export default apiSlice;
