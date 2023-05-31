import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
