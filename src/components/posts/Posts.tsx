import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPost} from "../../interfaces/IPost.ts";
import {PostService} from "../../services/postService.ts";
import {Post} from "./Post.tsx";

const Posts = () => {

    const {id} = useParams()

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if (id) {
        PostService.getPosts(+id).then(({data}) => setPosts(data))
        }
    }, []);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};
