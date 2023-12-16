import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "isloggedIn",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn; 
    },
  },
});

export const { loggedIn } = loginSlice.actions;
export default loginSlice.reducer;
