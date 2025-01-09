import { FC } from "react";
import {ITodo} from "../../interfaces/todo.interface.ts";

type TodoPropType={
todo: ITodo
}

const TodoComponent: FC<TodoPropType> = ( {todo}) => {

    return (
        <div className='flex items- flex-col m-5 p-5 border-dotted border-2 border-stone-400 '>
            <div>userId: {todo.userId}</div>
            <div>id: {todo.id}</div>
            <div>title: {todo.title}</div>

        </div>
    );
};

export {TodoComponent};
