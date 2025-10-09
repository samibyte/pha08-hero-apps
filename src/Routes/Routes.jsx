import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import InstallationPage from "../Pages/InstallationPage";
import AppsPage from "../Pages/AppsPage";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AppsPage,
      },
      {
        path: "/installation",
        Component: InstallationPage,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
