import {FC} from "react";
import {IUser} from "../interfaces/IUser.ts";

type UserPropsType={
    user:IUser
}

const User:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
};

export {User};
