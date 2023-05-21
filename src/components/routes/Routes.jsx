import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import ErrorPage from "../Pages/ErrorPage";
import Blogs from "../Pages/Blogs";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddToy from "../Pages/AddToy";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import ToyUpdate from "../Pages/ToyUpdate";
import ToyDetails from "../Pages/ToyDetails";

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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch("https://toyland-server-eight.vercel.app/toys"),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoutes>
            <AddToy />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
        loader: () => fetch("https://toyland-server-eight.vercel.app/toys"),
      },
      {
        path: "/toyUpdate/:id",
        element: <ToyUpdate />,
        loader: ({ params }) =>
          fetch(`https://toyland-server-eight.vercel.app/toys/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toyland-server-eight.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
