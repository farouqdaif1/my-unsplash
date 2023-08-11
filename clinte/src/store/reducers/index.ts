import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './slice';


const rootReducer = combineReducers({
    reducer: imageReducer,
})
export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;
