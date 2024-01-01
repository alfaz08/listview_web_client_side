import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/signUp",
      element: <SignUp></SignUp> ,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
   ]
  },
   ]);

export default router;