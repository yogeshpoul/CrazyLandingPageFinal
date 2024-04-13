import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopOnePage from "pages/DesktopOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <DesktopOnePage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
