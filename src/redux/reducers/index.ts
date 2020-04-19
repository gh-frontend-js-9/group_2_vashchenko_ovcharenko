import { combineReducers } from "redux";
import {getPostsReducer} from "./getPosts";

const rootReducer = combineReducers({
    getPostsReducer,
});

export default rootReducer;