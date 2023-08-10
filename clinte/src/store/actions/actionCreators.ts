import * as api from '../api';
import { fetchImages } from '../reducers/reducer';
// Define the async thunk
export const fetchData = () => async () => {
    try {
        return api.fetchImages();
    } catch (error) {
        console.log(error);
    }

};