import {useEffect, useState} from "react";
import {userService} from "../../services/userService.ts";
import {IUsersList} from "../../interfaces/user.interface.tsx";
import {User} from "./User.tsx";

const Users = () => {

    const [usersLists, setUsersList] = useState<IUsersList | null>(null)

    useEffect(() => {
        userService.getUsers().then(res => setUsersList(res))
    }, []);
    return (
        <div>
            {
            usersLists && usersLists.users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};
