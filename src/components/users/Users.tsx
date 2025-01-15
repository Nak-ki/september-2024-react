import {useEffect, useState} from "react";
import {IUserList} from "../../interfaces/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {UserService} from "../../services/userService.ts";
import {User} from "./User.tsx";
import {Pagination} from "../pagination/Pagination.tsx";

const Users = () => {

    const [usersList, setUsersList] = useState<IUserList | null>(null)

    const [query] = useSearchParams()

    const skip = query.get('skip')

    useEffect(() => {

        UserService.getUsers(skip || '30').then(users => setUsersList(users))

    }, [skip]);
    return (
        <div>
            {
                usersList && usersList.users.map(user => <User key={user.id} user={user}/>)
            }
            <Pagination/>
        </div>
    );
};

export {Users};
