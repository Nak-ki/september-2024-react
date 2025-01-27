import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";

export const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UserPage/>
            },
            {
                path:'users/:id/posts', element:<PostPage/>
            }
        ]
    }


])