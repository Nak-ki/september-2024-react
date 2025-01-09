import { useEffect, useState } from "react";
import {ITodo} from "../../interfaces/todo.interface.ts";
import {getTodos} from "../../services/todo.service.ts";
import {TodoComponent} from "../todoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
       const todos = async () => {
           const tds = await getTodos();
           setTodos(tds)
       }
       todos()

        return() => {}

    }, []);
    return (
        <div className='font-mono font-light'>{
            todos.map( todo => <TodoComponent key={todo.id} todo={todo} />)
        }
        </div>
    );
};

export {TodoComponents};
