import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "./features/Layout";
import Home from "./features/Home";
import Login from "./features/authentication/Login";
import UserProfile from "./features/SellerProfile/UserProfile";
import SignUp from "./features/authentication/SignUp";
import NomalUser from "./features/NormalUser/NormalUser";
import { Toaster } from "react-hot-toast";
import Profilee from "./features/NormalUser/Profilee";
import Profile from "./features/SellerProfile/Profile";
import Borrow from "./features/Item/Borrow";
import VisitProfile from "./features/ui/VisitProfile";
import SellerLongin from "./features/authentication/SellerLogin";
import EditProfile from "./features/ui/EditProfile";
// import Search from "./features/Item/Search";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/search",
    element: <NomalUser />,
  },
  {
    path: "/:id",
    element: <Profilee />,
  },
  {
    path: "/seller/Login",
    element: <SellerLongin />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/sellerprofile",
    element: <Profile />,
  },
  {
    path: "/sellerprofile/editsellerProfile",
    element: <EditProfile />,
  },
  {
    path: "borrow/:id",
    element: <Borrow />,
  },

  {
    path: "profile/:name/:id",
    element: <VisitProfile />,
  },
  {
    element: <Layout />,
    // hello

    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

// Query...............................................
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
