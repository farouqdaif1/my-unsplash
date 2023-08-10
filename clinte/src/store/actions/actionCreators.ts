import * as api from '../api';
import { setImages } from '../reducers/reducer';
import { Dispatch } from 'redux';
export const fetchData = () => async (dispatch: Dispatch<ImagesAction>) => {
    try {
        const { data } = await api.fetchImages();
        const dataState :ImageState= {
            images :[...data]
        }
        dispatch(setImages(dataState));
    } catch (error) {
        console.log(error);
    }

};