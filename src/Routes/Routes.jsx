import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import InstallationPage from "../Pages/InstallationPage";
import AppsPage from "../Pages/AppsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
    ],
  },
]);

export default router;
