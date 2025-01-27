import {apiService} from "./api.service.ts";

import {urls} from "../constants/constants.ts";
import {IPost} from "../interfaces/IPost.ts";

export const PostService = {
    getPosts: async (id:number) => await apiService.get<IPost[]>(urls.posts.getUserPosts(id))
}