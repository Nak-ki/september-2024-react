import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";

export const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                path:'users', element:<UserPage/>
            }
        ]
    }
])