import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";
import AllGroup from "../Pages/AllGroup";
import MyGroup from "../Pages/MyGroup";
import Home from "../Pages/Home";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'allGroups',
                element: <AllGroup></AllGroup>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>,
        children: [{
            path: 'register',
            element: <Register></Register>
        }]
    },
    {
        path: 'createGroup',
        element: <CreateGroup></CreateGroup>
    },
    {
        path: 'myGroup',
        element: <MyGroup></MyGroup>
    },
    {
        path:'/*',
        element: <Error></Error>
    }
]);

export default router;