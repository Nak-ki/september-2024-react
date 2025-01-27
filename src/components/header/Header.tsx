import {useContext} from "react";
import {MyContext} from "../hoc/myContex.tsx";

const Header = () => {

const {flag, trigger} = useContext(MyContext)

    if (flag) {
        document.body.classList.add("dark")
    }
    else {
        document.body.classList.remove("dark")
    }

    return (
        <div>
            <button onClick={()=> trigger(flag)}>switch</button>
        </div>
    );
};

export {Header};
