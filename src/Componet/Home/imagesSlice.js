import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    allImages: false,
  },
  reducers: {
    setImages: (state) => {
      state.allImages = !state.allImages; 
    },
  },
});

export const { setImages } = imagesSlice.actions;
export default imagesSlice.reducer;
