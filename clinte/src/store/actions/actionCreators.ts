import * as api from '../api';
import { setImages, removeImage, addImage } from '../reducers/slice';
import { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export const fetchData = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        const { data } = await api.fetchImages();
        const dataState: ImageState = {
            images: [...data]
        }
        dispatch(setImages(dataState));
    } catch (error) {
        console.log(error);
    }

};
export const deleteImage = (id: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        await api.deleteImage(id);
        console.log(id);
        dispatch(removeImage(id));
    } catch (error) {
        console.log(error);
    }
}
export const createImage = (image: Image): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        const { data } = await api.createImage(image);
        dispatch(addImage(data));
    } catch (error) {
        console.log(error);
    }
};
export const searchImage = (search: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        const { data } = await api.searchImages(search);
        const dataState: ImageState = {
            images: [...data]
        }
        if (dataState) {
            dispatch(setImages(dataState));
        }
    } catch (error) {
        console.log(error);
    }
};