import * as api from '../api';
import { setImages } from '../reducers/reducer';
import { Dispatch } from 'redux';
// Define the async thunk
export const fetchData = () => async (dispatch: Dispatch<ImagesAction>) => {
    try {
        const { data } = await api.fetchImages();
        dispatch(setImages(data));
    } catch (error) {
        console.log(error);
    }

};