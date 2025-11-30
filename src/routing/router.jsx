import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import Posts from "../views/Posts";
import { getAllPostsLoader, getSinglePostLoader } from "./loaders";
import DetailView from "../views/DetailView";
import Login from "../views/Login";
import Register from "../views/Register";

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
                Component: Posts,
                loader: getAllPostsLoader
            },
            {
                path: '/posts/detail/:id',
                Component: DetailView,
                loader: getSinglePostLoader
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
]);

export default router;