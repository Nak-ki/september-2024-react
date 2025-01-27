import {FC} from "react";
import {IPost} from "../../interfaces/IPost.ts";

type PostPropsType={
    post: IPost
}

const Post:FC<PostPropsType> = ({post}) => {
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.body}</p>
        </div>
    );
};

export {Post};
