import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../screen/nav/header";
import Products from "../screen/products";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen w-full">{children ? children : <Outlet />} </div>
  );
};

export default function Modules() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <Header />,
          children: [
            {
              index: true,
              element: <h1>Home</h1>,
            },
            {
              path: "products",
              element: <Products />,
            },
          ],
        },

        {
          path: "contact",
          element: <h1>contact</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
}
