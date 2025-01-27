import {apiService} from "./api.service.ts";

import {urls} from "../constants/constants.ts";

import {IUser} from "../interfaces/IUser.ts";


export const UserService = {
    getUsers:  async () => await apiService.get<IUser[]>(urls.users.getUsers)
}