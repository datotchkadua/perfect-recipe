import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import BlogPage from "./pages/BlogPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import AboutUsPage from "./pages/aboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },

      {
        path: "recipe",
        element: <RecipePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "create-recipe",
        element: <CreateRecipePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <SignupPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
