import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'', element:<MainLayout/>, children:[
                { path:'users', element:<UsersPage/>},
                { path:'carts/user/:id', element:<ProductsPage/>}
            ]
        }
    ]
)