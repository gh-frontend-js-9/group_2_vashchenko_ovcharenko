import {Post} from "../../../models/Post";

export interface getPostsState {
    isPending: boolean,
    posts: Post[]
    currentPost: Post | null
}