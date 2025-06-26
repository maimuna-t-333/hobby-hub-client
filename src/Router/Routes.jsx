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
import GroupDetails from "../Pages/GroupDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateGroup from "../Pages/UpdateGroup";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader:()=>fetch('https://hobby-hub-server-psi.vercel.app/hobby'),
            },
            {
                path: 'allGroups',
                element: <AllGroup></AllGroup>
            },
            {
                path:'aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>,
         },
        {
            path: 'register',
            element: <Register></Register>
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
    },
    {
        path:'/group/:id',
        element: <PrivateRoute><GroupDetails></GroupDetails></PrivateRoute>
    },
    {
        path:'/myGroup',
        element: <MyGroup></MyGroup>
    },
    {
        path:'/updateGroup/:id',
        element: <PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>
    }
]);

export default router;