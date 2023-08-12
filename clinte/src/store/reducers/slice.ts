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
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((image) => image._id !== action.payload);
    },
    addImage: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },
  },
});
export const { setImages, removeImage, addImage } = imageSlice.actions;
export default imageSlice.reducer;
