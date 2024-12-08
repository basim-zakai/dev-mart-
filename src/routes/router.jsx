import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/home";
import SignUp from "../auth/signUp";
import  Login  from "../auth/login";

export const PublicRoute = createBrowserRouter([
    {
        path :'/',
       element: <Homepage></Homepage>
       
       
    },
    {
        path :'/auth/signup',
        element: <SignUp></SignUp>
    },
    {
        path :'/auth/login',
        element: <Login></Login>
    },
])