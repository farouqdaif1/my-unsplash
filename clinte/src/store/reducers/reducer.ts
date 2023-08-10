import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: ImageState = {
  images: [] // Initialize the 'images' property with an empty array
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<Image[]>) => {
      state.images = action.payload;
    }

  },
});
export const { setImages } = imageSlice.actions;
export default imageSlice.reducer;
