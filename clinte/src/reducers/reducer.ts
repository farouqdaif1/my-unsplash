import { FETCH_ALL, ADD_IMAGE, REMOVE_IMAGE } from '../constants/actionTypes';
export default (images:ImageState=[] , action: ImageAction) : ImageState => {
    switch (action.type) {
        case REMOVE_IMAGE:
            return images.filter((image)=> image.id !== action.payload.id);
        case FETCH_ALL:
            return action.payload;
        case ADD_IMAGE:
            return [...images, action.payload];
        default:
            return images;
    }
}
