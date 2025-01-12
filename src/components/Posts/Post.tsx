import {FC} from "react";
import {IPost} from "../../interfaces/post.interface.tsx";


type PostPropType={
    post: IPost
}

const Post:FC<PostPropType> = ({post}) => {
    return (
        <div className='pb-1 py-1 mt-1.5 ml-2'>
           <div>{post.userId}</div>
           <div>{post.title}</div>
           <div>{post.body}</div>
            <hr/>
        </div>
    );
};

export {Post};
