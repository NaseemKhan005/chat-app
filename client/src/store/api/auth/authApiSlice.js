import apiSlice from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (data) => ({
        url: `auth/${data.path}`,
        method: "POST",
        body: data.formData,
      }),
    }),
  }),
});

export const { useAuthMutation } = authApiSlice;
