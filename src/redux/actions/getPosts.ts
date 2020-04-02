import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

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

export const getPosts: ()
    => (dispatch: Dispatch)
    => void = () => {
    return (dispatch: Dispatch) => {
        dispatch(getPostsPending());
        API.getPostsForEveryCategories()
            .then(success => {
                dispatch(getPostsSuccess(success));
            })
            .catch(err => {
                dispatch(getPostsError(err));
            });
    };
};