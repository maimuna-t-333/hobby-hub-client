import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path:''
  }
]);

export default router;