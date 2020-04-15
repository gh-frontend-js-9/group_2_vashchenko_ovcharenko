import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_PAGES_SUCCESS = 'GET_PAGES_SUCCESS';

export const getPostsPending: ActionCreator<Action> = () => {
    return {
        type: GET_POSTS_PENDING,
        payload: true
    };
};

export const getPostsSuccess: ActionCreator<Action> = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: {
            posts: posts,
        }
    };
};

export const getPostsError: ActionCreator<Action> = () => {
    return {
        type: GET_POSTS_ERROR,
        payload: false,
    };
};
export const getPages: ActionCreator<Action> = (pages) => {
    return {
        type: GET_PAGES_SUCCESS,
        payload:{
            pages:pages
        },
    };
};

export const getPosts: (page,limit)
    => (dispatch: Dispatch)
    => void = (page,limit) => {
    return (dispatch: Dispatch) => {
        dispatch(getPostsPending());
        API.getPostsForEveryCategories(page,limit)
            .then(success => {
                console.log(success)
                dispatch(getPostsSuccess(success.post));
                dispatch(getPages(success.pages))
            })
            .catch(err => {
                dispatch(getPostsError(err));
            });
    };
};