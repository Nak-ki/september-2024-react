import {ITodo} from "../interfaces/todo.interface.ts";

const url = import.meta.env.VITE_API_URL

export const getTodos = async (): Promise<ITodo[]> => {
    const todos = await fetch(url).then(value => value.json());
    return todos;
}

