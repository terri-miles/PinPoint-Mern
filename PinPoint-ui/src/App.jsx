import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "../src/Pages/home/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AddCustomer from "../src/Pages/addCustomer/AddCustomer";
import List from "../src/Pages/myCustomers/List";
import Login from "../src/Pages/login/Login";
import Register from "../src/Pages/register/Register";
import Plan from "../src/Pages/plan/Plan";
import Customer from "../src/Pages/customer/Customer"
import { Customers, Customerss } from "./utils/loader";

function App() {
  const Layout = () => {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
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
          path: "/add",
          element: <AddCustomer />,
        },
        {
          path: "/list",
          element: <List />,
          loader: Customers,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/plan",
          element: <Plan />,
        },
        {
          path: "/customers/single/:id",
          element: <Customer />,
          loader: Customerss,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
