import {url} from "../constants/constants.tsx";
import {IUserList} from "../interfaces/IUser.ts";

export const UserService = {
 getUsers: async (skip: string): Promise<IUserList> => {
     return await fetch(url.users.getUsers + skip ).then(res => res.json())
 }
}