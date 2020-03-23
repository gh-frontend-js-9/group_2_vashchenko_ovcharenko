import {
    GET_POSTS_ERROR,
    GET_POSTS_PENDING,
    GET_POSTS_SUCCESS
} from "../actions/getPosts";

import {getPostsState} from "./types/GetPosts";
import {Reducer} from "redux";

const initialState: getPostsState = {
    isPending: false,
    posts : [],
};

export const getPostsReducer: Reducer<getPostsState> = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                posts: action.payload.posts
            };
        case GET_POSTS_PENDING:
            return {
                ...state,
                isPending: action.payload
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        default:
            return state;
    }
};