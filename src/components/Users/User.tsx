import {FC} from "react";
import {IUser} from "../../interfaces/user.interface.tsx";
import {useNavigate} from "react-router-dom";


type UserPropsType={
    user: IUser
}

const User: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate()
    return (
        <div className='pb-1 py-1 mt-1.5 ml-2' onClick={() => navigate(`${user.id}/carts`, {state:user.id})}>
            <div>{user.id}</div>
            <div>{user.firstName} {user.lastName}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
            <hr/>
        </div>
    );
};

export {User};