import Main from "../Layout/Main/Main";
import Home from "../Layout/Home/Home";
import Projects from "../Layout/Projects/Projects";
import Contact from "../Layout/Home/Contact/Contact";
import SingleItem from "../Layout/Projects/SingleItem/SingleItem";
import About from "../Layout/Home/About/About";

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
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: (
          <div className="grid justify-items-center my-20">
            <img
              src="https://i.ibb.co/XYxRyC3/istockphoto-1136662362-612x612.jpg"
              alt=""
            />
          </div>
        ),
      },
      {
        path: "/projects/:id",
        loader: async ({ params }) => {
          return fetch(
            ` https://portfolio-server-sand.vercel.app/projects/${params.id}`
          );
        },
        element: <SingleItem></SingleItem>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Routes not declare</h1>,
  },
]);

export default router;
