import {ITodo} from "../../interfaces/todo.interface.ts";
import {FC} from "react";

type TodoPropType={
    todo:ITodo
}

const Todo: FC<TodoPropType> = ({todo}) => {
    return (
        <div className='my-2 flex items- flex-col m-5 p-5 border-dotted border-2 border-b-indigo-500'>
            <div>id: {todo.id}</div>
            <div>todo: {todo.todo}</div>
            <div>userId: {todo.userId}</div>
        </div>
    );
};

export {Todo};
