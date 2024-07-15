import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUserToChat: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToChat: (state, action) => {
      state.selectedUserToChat = action.payload;
    },
  },
});

export const { setUserToChat } = userSlice.actions;

export default userSlice.reducer;
