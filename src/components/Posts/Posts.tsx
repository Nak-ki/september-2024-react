import {useEffect, useState} from "react";
import {IPostsList} from "../../interfaces/post.interface.tsx";
import {postService} from "../../services/postService.ts";
import {Post} from "./Post.tsx";

const Posts = () => {

    const [postsList, setPostsList] = useState<IPostsList | null>(null)

    useEffect(() => {
        postService.getPosts().then(res => setPostsList(res))
    }, []);
    return (
        <div>
            {
                postsList && postsList.posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};
