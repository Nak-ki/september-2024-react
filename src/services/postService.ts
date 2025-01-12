import {urls} from "../constants/urls.tsx";
import {IPostsList} from "../interfaces/post.interface.tsx";


export const postService = {
    getPosts: async (): Promise<IPostsList> => {
        return  await fetch(urls.posts.getPosts).then((posts) => posts.json())
    }
}