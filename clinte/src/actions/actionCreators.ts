import * as api from '../api/index.js';
import { FETCH_ALL, ADD_IMAGE, REMOVE_IMAGE } from "../constants/actionTypes";
//Action creators

export const getImage= () => async (dispatch: DispatchType) => {
    try {
        const { data  } = await api.fetchImages();
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error);
    }
}
export const addImage= (image: ImageData) => async (dispatch: DispatchType) => {
    try {
        const { data } = await api.createImage(image);
        dispatch({ type: ADD_IMAGE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteImage = (id: number) => async (dispatch: DispatchType) => {
    try {
        const { data } = await api.deleteImage(id);
        dispatch({ type: REMOVE_IMAGE, payload: data })
    } catch (error) {
        console.log(error);
    }
}