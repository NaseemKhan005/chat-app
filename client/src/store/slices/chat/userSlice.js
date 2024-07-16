import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUserToChat: null,
  },

  reducers: {
    setUserToChat: (state, action) => {
      state.selectedUserToChat = action.payload;
    },
    clearUser: (state) => {
      state.selectedUserToChat = null;
    },
  },
});

export const { setUserToChat, clearUser } = userSlice.actions;

export default userSlice.reducer;
