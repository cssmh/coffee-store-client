import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import AddCoffee from "../Component/AddCoffee/AddCoffee";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import UpdateCoffee from "../Component/UpdateCoffee/UpdateCoffee";
import Details from "../Component/Details/Details";
import SignUp from "../Component/SignUp/SignUp";
import SignIn from "../Component/SignIn/SignIn";
import Users from "../Component/Users/Users";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/coffee-update/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/coffee-update/${params.id}`
          ),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("http://localhost:5000/allUsers"),
      },
    ],
  },
]);

export default Root;
