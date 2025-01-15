import {FC} from "react";
import {IUser} from "../../interfaces/IUser.ts";

type UserPropsType={
    user:IUser
}

const User:FC<UserPropsType> = ({user}) => {
    return (
        <div className='pb-1 py-1 m-2 border-b-2 border-b-fuchsia-500' >
            <div>{user.firstName} {user.lastName}</div>
        </div>
    );
};

export {User};
