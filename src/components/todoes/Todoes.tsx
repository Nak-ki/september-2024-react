import {useEffect, useState} from "react";
import {ListTodoes} from "../../interfaces/todo.interface.ts";
import {Todo} from "./Todo.tsx";
import {getTodos} from "../../services/todo.service.ts";

const Todoes = () => {
    const [todoes, setTodoes] = useState<ListTodoes| null>(null)


    useEffect(() => {
        const tsc = async () => {
            const tds = await getTodos()
            setTodoes(tds)
            console.log(tds)
        }
        tsc()

            return() => {}
    }, []);

    console.log(todoes)

    return (
        <div className='font-mono font-light flex flex-col justify-items-center'> {
            todoes && todoes.todos.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
        </div>
    );
};

export {Todoes};
