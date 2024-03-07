import ErrorPage from "@pages/dashboard/Error";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

const App = lazy(() => import("App"));
const Login = lazy(() => import("@pages/Login"));
const Logout = lazy(() => import("@pages/Logout"));
const Register = lazy(() => import("@pages/Register"));
const Dashboard = lazy(() => import("@pages/dashboard"));
const Home = lazy(() => import("@pages/dashboard/home"));
const Companies = lazy(() => import("@pages/dashboard/companies"));
const Bots = lazy(() => import("@pages/dashboard/bots"));
const Messages = lazy(() => import("@pages/dashboard/messages"));
const Profile = lazy(() => import("@pages/dashboard/profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/logout",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <Logout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<TopBarProgress />}>
        <Register />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { element: <Home />, index: true },
      { path: "companies", element: <Companies /> },
      { path: "bots", element: <Bots /> },
      { path: "messages", element: <Messages /> },
      { path: "profile", element: <Profile /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
