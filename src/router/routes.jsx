import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import PrivateRouter from "./PrivateRouter";
//import { element } from "prop-types";
import CreateCourse from "../pages/Dashboard/CreateCourse";
import Course from "../pages/Dashboard/Course";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        children: [
            {
                index: true,
                element: <DashboardHome />,
            },
            {
                path: 'create-course',
                element: <CreateCourse />,
            },
            {
                path: 'course',
                element: <Course />,
            },
        ],
    },
]);

export default router;