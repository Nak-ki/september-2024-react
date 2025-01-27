import {createContext} from "react";

type ContextPropsType={
    flag:boolean,
    trigger:(obj:boolean) => void

}

export const switchTheme = {
    flag:false,
    trigger: (obj:boolean) =>
        console.log(obj)
}

export const MyContext = createContext<ContextPropsType>(switchTheme)