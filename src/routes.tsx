import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Home from "./pages/home/home";
import About from "./pages/about/about";

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
            }
        ]
    },
]);
