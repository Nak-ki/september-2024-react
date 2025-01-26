import {useEffect, useState} from "react";
// import {IUser} from "../interfaces/IUser.ts";


export const useFetch = <T, > (url: string ) => {
    const [users, setUsers] = useState<T>()

    useEffect(() => {
        fetch(url).then(value => value.json().then(value => setUsers(value)))
    }, [url]);

    return users
}
