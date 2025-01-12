import {FC} from "react";
import {IUser} from "../../interfaces/user.interface.tsx";


type UserPropsType={
    user: IUser
}

const User: FC<UserPropsType> = ({user}) => {
    return (
        <div className='pb-1 py-1 mt-1.5 ml-2'>
         <div>{user.firstName} {user.lastName}</div>
         <div>{user.age}</div>
         <div>{user.email}</div>
            <hr/>
        </div>
    );
};

export {User};
