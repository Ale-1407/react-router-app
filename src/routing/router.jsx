import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import Posts from "../views/Posts";
import { getAllPostsLoader, getSinglePostLoader } from "./loaders";
import DetailView from "../views/DetailView";

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
            }
        ]
    }
]);

export default router;