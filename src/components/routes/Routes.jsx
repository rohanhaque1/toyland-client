import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import ErrorPage from "../Pages/ErrorPage";
import Blogs from "../Pages/Blogs";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddToy from "../Pages/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />
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
        path: '/addToys',
        element: <AddToy />
      }
    ],
  },
]);

export default router;
