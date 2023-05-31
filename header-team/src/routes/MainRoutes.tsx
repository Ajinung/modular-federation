import { createBrowserRouter } from "react-router-dom";
import Datafetching from "../pages/Datafetching";
import HomeLayout from "../components/layout/HomeLayout";
import Todo from "../pages/Todo";
import StateManagement from "../pages/StateManagement";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Datafetching />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "state-management",
        element: <StateManagement />,
      },
      {
        path: "data-fetching",
        element: <Datafetching />,
      },
    ],
  },
]);
