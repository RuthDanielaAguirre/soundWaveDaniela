import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../Layout";
import { Join } from "../pages/Join";
import { Discover } from "../pages/Discover";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/discover",
                element: <Discover/>
            },
            {
                path: "/join",
                element: <Join />
            }
        ]
    },


]);