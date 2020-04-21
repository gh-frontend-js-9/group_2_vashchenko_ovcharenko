import {
    GET_POSTS_ERROR,
    GET_POSTS_PENDING,
    GET_POSTS_SUCCESS,
    GET_PAGES_SUCCESS,
    SET_CURRENT_POST,
    CLEAR_STORE
} from "../actions/getPosts";

import {getPostsState} from "./types/GetPosts";
import {Reducer} from "redux";

const initialState: getPostsState = {
    isPending: false,
    posts : [],
    currentPost: null
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
        case GET_PAGES_SUCCESS:
            return {
                ...state,
                pages: action.payload.pages,
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload.post
            };
        case CLEAR_STORE:
            return {
                ...state,
                posts: [],
                currentPost: 0
            };
        default:
            return state;
    }
};
