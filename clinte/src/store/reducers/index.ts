import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './reducer';


const rootReducer = combineReducers({
    reducer: imageReducer,
})
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
