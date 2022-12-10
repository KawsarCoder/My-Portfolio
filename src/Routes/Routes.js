import Main from "../Layout/Main/Main";
import Home from "../Layout/Home/Home";
import Projects from "../Layout/Projects/Projects";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Projects",
        element: <Projects></Projects>,
      },
    ],
  },
]);

export default router;
