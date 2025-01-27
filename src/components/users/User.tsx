import {FC} from "react";
import {IUser} from "../../interfaces/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserPropsType={
    user: IUser
}

const User:FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate()
    const showPost = ()=>  {
        navigate(`${user.id}/posts`)
    }

    return (
        <div onClick={showPost}>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    );
};

export {User};
