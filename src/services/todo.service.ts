import { ListTodoes} from "../interfaces/todo.interface.ts";

const baseURL = import.meta.env.VITE_API_URL

export const getTodos = async (): Promise<ListTodoes> => {
    const todoes = await fetch(baseURL).then(value => value.json())
    return todoes;
}