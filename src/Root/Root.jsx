import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import AddCoffee from "../Component/AddCoffee/AddCoffee";
import ErrorPage from "../Component/ErrorPage/ErrorPage";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

export default Root;
