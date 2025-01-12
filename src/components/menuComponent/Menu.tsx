import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className= 'flex flex-row space-x-64 '>
           <Link className=' text-xl py-1 pb-1 justify-center content-center' to={'/users'}>Users</Link>
            <Link className=' text-xl py-1 pb-1justify-center content-center' to={'/posts'}>Posts</Link>
        </div>
    );
};

export {Menu};
