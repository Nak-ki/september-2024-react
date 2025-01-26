import {useCallback, useEffect, useMemo, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState([])
    console.log(users)

    // useMemo кешируется массив и больше не выводидтся если нет изменений
    const arr:number[] = useMemo(()=> {
        return [11, 22, 33]
    }, []);

    // через useCallback происходит кеширование функции(пропсов), она отработает раз и закешируется; но может рендериться если приходят изменения в deps
    const foo = useCallback(() => {
        console.log('test')
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

    }, []);
    return (
        <div>
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export {UsersComponent};
