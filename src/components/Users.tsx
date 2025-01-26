import {User} from "./User.tsx";
import {useFetch} from "../hooks/useFetch.tsx";
import {IUser} from "../interfaces/IUser.ts";

const Users = () => {
    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            {
              users &&  users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};
