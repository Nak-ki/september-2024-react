import {urls} from "../constants/urls.tsx";
import {IUsersList} from "../interfaces/user.interface.tsx";

export const userService = {
    getUsers: async (): Promise<IUsersList> => {
       return  await fetch(urls.users.getUsers).then((users) => users.json())
    }
}