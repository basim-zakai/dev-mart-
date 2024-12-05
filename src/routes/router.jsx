import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/home";

export const PublicRoute = createBrowserRouter([
    {
        path :'/',
       element: <Homepage></Homepage>
       
    }
])