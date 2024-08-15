import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Collections from "./pages/Collections.jsx";
import Feed from "./pages/Feed.jsx";
import "./index.css";
import SignUp from "./Auth/SignUp.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "/Auth",
        children: [
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
