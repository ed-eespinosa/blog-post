import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Blogs from "./pages/blogs/blogs";
import BlogsDetail from "./pages/blogs-detail/blogs-detail";
import {loader as blogLoader} from "./pages/blogs-detail/blogs-detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                path: 'home',
                element: <Home/>
            },
            {
                index: true,
                path: 'about',
                element: <About/>
            },
            {
                index: true,
                path: 'blog',
                element: <Blogs/>
            },
            {
                index: true,
                path: 'blog/:id',
                element: <BlogsDetail/>,
                loader: blogLoader
            }
        ]
    },
]);
