import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import "./styles/variables.scss";

// Create a client
const queryClient = new QueryClient();

const Layout = () => {
  const [mode, setMode] = useState("#222b3c");

  return (
    <div
      className="main"
      style={{
        background: mode,
        color: `${mode === "#ddd" ? "#2a3447" : "#ddd"}`,
      }}
    >
      <Navbar setMode={setMode} mode={mode} />
      <div className="container">
        <div
          className="menuContainer"
          style={{ background: "#222b3c", color: "#ddd" }}
        >
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <div style={{ background: "#222b3c", color: "#ddd" }}>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:userId",
          element: <User />,
        },
        {
          path: "/products/:productId",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
