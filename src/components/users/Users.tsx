import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/IUser.ts";

import {UserService} from "../../services/userService.ts";
import {User} from "./User.tsx";


const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        UserService.getUsers().then(({data}) => setUsers(data))

    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};
