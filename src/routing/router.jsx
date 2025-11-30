import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import Posts from "../views/Posts";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Homepage
            },
            {
                path: '/posts',
                Component: Posts
            }
        ]
    }
]);

export default router;