import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: ImageState = {
  images: [] // Initialize the 'images' property with an empty array
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageState>) => {
      state.images = action.payload.images;
    }

  },
});
export const { setImages } = imageSlice.actions;
export default imageSlice.reducer;
