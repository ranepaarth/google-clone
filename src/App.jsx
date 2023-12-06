import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage, SearchPage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
