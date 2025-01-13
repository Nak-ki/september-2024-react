import {Outlet} from "react-router-dom";
import {Users} from "../components/Users/Users.tsx";

const UsersPage = () => {
    return (
        <div className='flex'>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
