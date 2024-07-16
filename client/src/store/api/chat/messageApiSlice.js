import apiSlice from "../apiSlice";

export const conversationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSeletedUserMessages: builder.query({
      query: (id) => ({
        url: `messages/${id}`,
        method: "GET",
      }),
      providesTags: ["Message"],
    }),
    sendMessage: builder.mutation({
      query: ({ id, message }) => ({
        url: `messages/send/${id}`,
        method: "POST",
        body: { message },
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const { useGetSeletedUserMessagesQuery, useSendMessageMutation } =
  conversationApiSlice;
